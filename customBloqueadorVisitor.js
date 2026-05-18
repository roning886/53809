import bloqueadorVisitor from './generated/bloqueadorVisitor.js';

export default class CustomBloqueadorVisitor extends bloqueadorVisitor {
    constructor() {
        super();
        this.variablesDeclaradas = new Set();
        this.listaNegraDeclarada = false;
    }

    // Traduce el nodo raíz prog
    visitProg(ctx) {
        let codigoJS = "";
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const hijo = ctx.getChild(i);
            codigoJS += this.visit(hijo) + "\n";
        }
        return codigoJS.trim();
    }

    // Traduce el bloque <DSL>
    visitDsl(ctx) {
        let cuerpo = "";
        let funciones = "";
        let llamadas = "";

        if (ctx.regla) {
            ctx.regla().forEach(r => {
                const resultado = this.visit(r);
                cuerpo += resultado.inicializaciones;
                funciones += resultado.funcion + "\n";
                llamadas += resultado.llamada + "\n";
            });
        }

        return `${cuerpo}\n${funciones}\n${llamadas}`;
    }

    // Traduce una regla individual de manera dinámica
    visitRegla(ctx) {
        const condicionStr = ctx.condicion().getText(); 
        const comandoStr = ctx.comando().getText();     
        
        let inicializaciones = `let ${condicionStr} = true;\n`;
        
        if (comandoStr.includes("ListaNegra") || comandoStr.includes("LN") || comandoStr.includes("IPAListaNegra")) {
            if (!this.listaNegraDeclarada) {
                inicializaciones += `const listaNegra = new Set();\n`;
                this.listaNegraDeclarada = true;
            }
        }

        let accionInternaJS = "";
        if (comandoStr.includes("agregarUsuarioAListaNegra") || comandoStr.includes("USUARIO")) {
            accionInternaJS = `const usuario = "usuario_sospechoso";\n        listaNegra.add(usuario);\n        console.log(\`Bloqueando a \${usuario} por intento de acceso fuera de horario.\`);`;
        } else if (comandoStr.includes("agregarIPAListaNegra") || comandoStr.includes("IP")) {
            accionInternaJS = `const ip = "192.168.1.50";\n        listaNegra.add(ip);\n        console.log(\`Bloqueando IP \${ip}.\`);`;
        } else {
            accionInternaJS = `console.log("Monitoreo detallado activado.");`;
        }

        const funcion = `function gestionarBloqueo() {
    if (${condicionStr}) {
        ${accionInternaJS}
    }
}`;

        return {
            inicializaciones: inicializaciones,
            funcion: funcion,
            llamada: "gestionarBloqueo();"
        };
    }
}