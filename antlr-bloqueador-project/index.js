import fs from 'fs';
import antlr4 from 'antlr4';

import bloqueadorLexer from './generated/bloqueadorLexer.js';
import bloqueadorParser from './generated/bloqueadorParser.js';

try {
    const input = fs.readFileSync('input.txt', 'utf-8');

    const chars = new antlr4.InputStream(input);
    const lexer = new bloqueadorLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    tokens.fill(); 

    tokens.tokens.forEach(token => {
        if (token.type !== -1) {
            const tokenName = lexer.symbolicNames[token.type] || "LITERAL";
            console.log(`Lexema: '${token.text.padEnd(28)}' -> Token: ${tokenName}`);
        }
    });
    console.log("==================================================\n");

    tokens.reset();

    const parser = new bloqueadorParser(tokens);

    
    const tree = parser.prog(); 


import CustomBloqueadorVisitor from './customBloqueadorVisitor.js';

const visitor = new CustomBloqueadorVisitor();
const codigoTraducido = visitor.visit(tree);

console.log("Código JavaScript Traducido:");
console.log("--------------------------------------------------");
console.log(codigoTraducido);
console.log("--------------------------------------------------");

console.log("\nEjecutando el código traducido (Intérprete):");
console.log("Salida:");
eval(codigoTraducido); 
console.log("==================================================");
    console.log("Árbol concreto generado:");
    console.log(tree.toStringTree(parser.ruleNames));
    console.log("==================================================");

} catch (error) {
    console.error("Error crítico en la ejecución:", error);
}