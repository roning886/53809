grammar lenguaje;

programa: sentencia*;

sentencia
    : sentenciaIf SALTOLINEA?           # sentenciaIfEtiq
    | sentenciaAsignacion ';' SALTOLINEA?   # sentenciaAsignEtiq
    | sentenciaConsola ';' SALTOLINEA?  # sentenciaConsolaEtiq
    | SALTOLINEA                        # blanca
    ;

sentenciaIf
    : 'if' '(' condicion ')' bloque ('else' bloque)?
    ;

bloque
    : '{' sentencia* '}'
    ;

condicion
    : expresion ((MAYOR | MENOR | IGUAL) expresion)*
    ;

sentenciaAsignacion
    : IDENT '=' expresion
    ;

sentenciaConsola
    : 'console' '.' 'log' '(' expresion ')'
    ;

expresion
    : expresion (MULT | DIVISION) expresion      # MultDiv
    | expresion (MAS | MENOS) expresion      # MasMenos
    | termino                       # terminoExpr
    ;

termino
    : '(' expresion ')'               # parentesis
    | IDENT                         # identificador
    | NUMERO                        # numero
    ;

IF: 'if';
ELSE: 'else';
CONSOLE: 'console';
LOG: 'log';
PUNTO_COMA: ';';
PUNTO: '.';
IGUAL: '=';
R_PARENT: ')';
L_PARENT: '(';
R_LLAVE: '}';
L_LLAVE: '{';

MAYOR: '>';
MENOR: '<';
IGUAL_COMP: '==';

MAS: '+';
MENOS: '-';
MULT: '*';
DIVISION: '/';

IDENT: LETRA (LETRA | DIGITO | '_')*;
NUMERO: DIGITO+;

fragment LETRA: [a-zA-Z];
fragment DIGITO: [0-9];

SALTOLINEA: ('\r\n' | '\n');
ES: (' ' | '\t')+ -> skip;
