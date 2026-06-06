import lenguajeLexer from "./generated/lenguajeLexer.js";
import lenguajeParser from "./generated/lenguajeParser.js";
import CustomLanguageVisitor from "./CustomLanguageVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    const inputFile = process.argv[2] || 'input.txt';

    try {
        input = fs.readFileSync(inputFile, 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new lenguajeLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new lenguajeParser(tokenStream);
    let tree = parser.programa();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\n✓ Entrada válida.\n");
        
        console.log("=== TABLA DE TOKENS ===");
        const tokens = tokenStream.tokens;
        console.log("Número | Valor | Clasificación");
        console.log("-------|-------|---------------");
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (token.type !== antlr4.Token.EOF) {
                const tokenName = parser.symbolicNames[token.type] || "UNNAMED";
                console.log(`${i.toString().padEnd(6)} | ${token.text.padEnd(5)} | ${tokenName}`);
            }
        }
        console.log();
        
        console.log("=== ÁRBOL DE DERIVACIÓN ===");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(cadena_tree);
        console.log();
        
        console.log("=== EJECUCIÓN ===");
        const visitor = new CustomLanguageVisitor();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
