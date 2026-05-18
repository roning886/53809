grammar bloqueador;

//REGLAS SINTÁCTICAS
prog                      : dsl+ ;

dsl                       : regla+ accion+ ;

regla  : REGLA COMILLA? IDENTIFICADOR COMILLA? L_LLAVE CUANDO condicion ENTONCES comando R_LLAVE ;

condicion                 : ACCESONOAUTORIZADO | multiplesIntentosFallidos | actividadSospechosa ;

multiplesIntentosFallidos : INTENTOS_FALLIDOS MAYOR DIGITO ;

actividadSospechosa       : ACCESO_RECURSOS Y NO_ADMINISTRADOR ;

comando                   : AGREGAR_USUARIO_LN 
                          | AGREGAR_IP_LN 
                          | ACTIVAR_MONITOREO 
                          ;

accion : ACCION COMILLA? (IDENTIFICADOR | AGREGAR_USUARIO_LN | AGREGAR_IP_LN | ACTIVAR_MONITOREO) COMILLA? L_LLAVE R_LLAVE ;

//REGLAS LÉXICAS

REGLA                     : 'regla' ;
ACCION                    : 'accion' ;
CUANDO                    : 'cuando' ;
ENTONCES                  : 'entonces' ;
L_LLAVE                   : '{' ;
R_LLAVE                   : '}' ;
MAYOR                     : '>' ;
COMILLA                   : '\'' ;
INTENTOS_FALLIDOS         : 'intentosFallidos' ;
ACCESO_RECURSOS           : 'accesoARecursosSensibles' ;
Y                         : 'y' ;
NO_ADMINISTRADOR          : 'noEsAdministrador' ;
AGREGAR_USUARIO_LN        : 'agregarUsuarioAListaNegra' ;
AGREGAR_IP_LN             : 'agregarIPAListaNegra' ;
ACTIVAR_MONITOREO         : 'activarMonitoreoDetallado' ;
ACCESONOAUTORIZADO        : 'intentoAccesoFueraHorario' ;
IDENTIFICADOR             : LETRA (LETRA | DIGITO | '_')* ;
CADENA                    : CARACTER+ ;
DIGITO                    : [0-9] ;
fragment LETRA            : [a-zA-Z] ;
fragment CARACTER         : LETRA | DIGITO | '_' | '-' | '/' ;
WS                        : [ \t\r\n]+ -> skip ;