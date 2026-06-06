import lenguajeVisitor from "./generated/lenguajeVisitor.js";

class CustomLanguageVisitor extends lenguajeVisitor {
    constructor() {
        super();
        this.memory = new Map();
    }

    visitPrograma(ctx) {
        const sentencias = ctx.sentencia();
        if (sentencias) {
            for (let sent of sentencias) {
                this.visit(sent);
            }
        }
        return null;
    }

    visitSentenciaIf(ctx) {
        const condicion = ctx.condicion();
        const bloques = ctx.bloque();
        
        const resultadoCondicion = this.visitCondicion(condicion);
        console.log(`▶ IF: condición evaluada a ${resultadoCondicion}`);
        
        if (resultadoCondicion) {
            if (bloques && bloques.length > 0) {
                this.visitBloque(bloques[0]);
            }
        } else {
            if (bloques && bloques.length > 1) {
                this.visitBloque(bloques[1]);
            }
        }
        return null;
    }

    visitBloque(ctx) {
        const sentencias = ctx.sentencia();
        if (sentencias) {
            for (let sent of sentencias) {
                this.visit(sent);
            }
        }
        return null;
    }

    visitCondicion(ctx) {
        const expresiones = ctx.expresion();
        if (!expresiones || expresiones.length === 0) {
            return false;
        }

        let resultado = this.visitExpresion(expresiones[0]);

        const operadores = [];
        for (let child of ctx.children) {
            if (child.getText && (child.getText() === '>' || child.getText() === '<' || child.getText() === '==')) {
                operadores.push(child.getText());
            }
        }

        for (let j = 0; j < operadores.length && j + 1 < expresiones.length; j++) {
            const op = operadores[j];
            const valorSiguiente = this.visitExpresion(expresiones[j + 1]);
            
            switch (op) {
                case '>':
                    resultado = resultado > valorSiguiente;
                    break;
                case '<':
                    resultado = resultado < valorSiguiente;
                    break;
                case '==':
                    resultado = resultado === valorSiguiente;
                    break;
            }
        }

        return resultado ? true : false;
    }

    visitSentenciaAsignacion(ctx) {
        const id = ctx.IDENT().getText();
        const exprCtx = ctx.expresion();
        const valor = this.visitExpresion(exprCtx);
        
        this.memory.set(id, valor);
        console.log(`✓ ${id} = ${valor}`);
        return null;
    }

    visitSentenciaConsola(ctx) {
        const exprCtx = ctx.expresion();
        const valor = this.visitExpresion(exprCtx);
        console.log(valor);
        return null;
    }

    visitMultDiv(ctx) {
        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        
        const op = ctx.getChild(1).getText();
        
        if (op === '*') {
            return izquierda * derecha;
        } else if (op === '/') {
            return Math.floor(izquierda / derecha);
        }
        return 0;
    }

    visitMasMenos(ctx) {
        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        
        const op = ctx.getChild(1).getText();
        
        if (op === '+') {
            return izquierda + derecha;
        } else if (op === '-') {
            return izquierda - derecha;
        }
        return 0;
    }

    visitTerminoExpr(ctx) {
        return this.visitTermino(ctx.termino());
    }

    visitParentesis(ctx) {
        return this.visitExpresion(ctx.expresion());
    }

    visitIdentificador(ctx) {
        const id = ctx.IDENT().getText();
        
        if (this.memory.has(id)) {
            return this.memory.get(id);
        } else {
            console.error(`Error: Variable '${id}' no está definida.`);
            return 0;
        }
    }

    visitNumero(ctx) {
        const numTexto = ctx.NUMERO().getText();
        return parseInt(numTexto, 10);
    }

    visitExpresion(ctx) {
        return this.visit(ctx);
    }

    visitTermino(ctx) {
        return this.visit(ctx);
    }
}

export default CustomLanguageVisitor;
