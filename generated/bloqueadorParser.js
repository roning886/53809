// Generated from f:/TAREAS/ing en sistemas/sintaxis y semantica de lenguaje/analizaor sintacticop/bloqueador de usuarios/antlr-bloqueador-project/bloqueador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import bloqueadorListener from './bloqueadorListener.js';
import bloqueadorVisitor from './bloqueadorVisitor.js';

const serializedATN = [4,1,20,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,4,1,23,8,1,11,1,
12,1,24,1,1,4,1,28,8,1,11,1,12,1,29,1,2,1,2,3,2,34,8,2,1,2,1,2,3,2,38,8,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,50,8,3,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,5,1,6,1,6,1,7,1,7,3,7,64,8,7,1,7,1,7,3,7,68,8,7,1,7,1,7,1,7,1,
7,0,0,8,0,2,4,6,8,10,12,14,0,2,1,0,13,15,2,0,13,15,17,17,73,0,17,1,0,0,0,
2,22,1,0,0,0,4,31,1,0,0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,55,1,0,0,0,12,59,
1,0,0,0,14,61,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,
0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,23,3,4,2,0,22,21,1,0,0,0,23,24,1,0,0,
0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,28,3,14,7,0,27,26,1,0,0,0,
28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,33,5,1,0,0,32,
34,5,8,0,0,33,32,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,37,5,17,0,0,36,38,
5,8,0,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,5,5,0,0,40,41,5,
3,0,0,41,42,3,6,3,0,42,43,5,4,0,0,43,44,3,12,6,0,44,45,5,6,0,0,45,5,1,0,
0,0,46,50,5,16,0,0,47,50,3,8,4,0,48,50,3,10,5,0,49,46,1,0,0,0,49,47,1,0,
0,0,49,48,1,0,0,0,50,7,1,0,0,0,51,52,5,9,0,0,52,53,5,7,0,0,53,54,5,19,0,
0,54,9,1,0,0,0,55,56,5,10,0,0,56,57,5,11,0,0,57,58,5,12,0,0,58,11,1,0,0,
0,59,60,7,0,0,0,60,13,1,0,0,0,61,63,5,2,0,0,62,64,5,8,0,0,63,62,1,0,0,0,
63,64,1,0,0,0,64,65,1,0,0,0,65,67,7,1,0,0,66,68,5,8,0,0,67,66,1,0,0,0,67,
68,1,0,0,0,68,69,1,0,0,0,69,70,5,5,0,0,70,71,5,6,0,0,71,15,1,0,0,0,8,19,
24,29,33,37,49,63,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bloqueadorParser extends antlr4.Parser {

    static grammarFileName = "bloqueador.g4";
    static literalNames = [ null, "'regla'", "'accion'", "'cuando'", "'entonces'", 
                            "'{'", "'}'", "'>'", "'''", "'intentosFallidos'", 
                            "'accesoARecursosSensibles'", "'y'", "'noEsAdministrador'", 
                            "'agregarUsuarioAListaNegra'", "'agregarIPAListaNegra'", 
                            "'activarMonitoreoDetallado'", "'intentoAccesoFueraHorario'" ];
    static symbolicNames = [ null, "REGLA", "ACCION", "CUANDO", "ENTONCES", 
                             "L_LLAVE", "R_LLAVE", "MAYOR", "COMILLA", "INTENTOS_FALLIDOS", 
                             "ACCESO_RECURSOS", "Y", "NO_ADMINISTRADOR", 
                             "AGREGAR_USUARIO_LN", "AGREGAR_IP_LN", "ACTIVAR_MONITOREO", 
                             "ACCESONOAUTORIZADO", "IDENTIFICADOR", "CADENA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "prog", "dsl", "regla", "condicion", "multiplesIntentosFallidos", 
                         "actividadSospechosa", "comando", "accion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bloqueadorParser.ruleNames;
        this.literalNames = bloqueadorParser.literalNames;
        this.symbolicNames = bloqueadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bloqueadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.dsl();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bloqueadorParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 21;
	            this.regla();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.accion();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bloqueadorParser.RULE_regla);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(bloqueadorParser.REGLA);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 32;
	            this.match(bloqueadorParser.COMILLA);
	        }

	        this.state = 35;
	        this.match(bloqueadorParser.IDENTIFICADOR);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 36;
	            this.match(bloqueadorParser.COMILLA);
	        }

	        this.state = 39;
	        this.match(bloqueadorParser.L_LLAVE);
	        this.state = 40;
	        this.match(bloqueadorParser.CUANDO);
	        this.state = 41;
	        this.condicion();
	        this.state = 42;
	        this.match(bloqueadorParser.ENTONCES);
	        this.state = 43;
	        this.comando();
	        this.state = 44;
	        this.match(bloqueadorParser.R_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bloqueadorParser.RULE_condicion);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(bloqueadorParser.ACCESONOAUTORIZADO);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.multiplesIntentosFallidos();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.actividadSospechosa();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplesIntentosFallidos() {
	    let localctx = new MultiplesIntentosFallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bloqueadorParser.RULE_multiplesIntentosFallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(bloqueadorParser.INTENTOS_FALLIDOS);
	        this.state = 52;
	        this.match(bloqueadorParser.MAYOR);
	        this.state = 53;
	        this.match(bloqueadorParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actividadSospechosa() {
	    let localctx = new ActividadSospechosaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bloqueadorParser.RULE_actividadSospechosa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(bloqueadorParser.ACCESO_RECURSOS);
	        this.state = 56;
	        this.match(bloqueadorParser.Y);
	        this.state = 57;
	        this.match(bloqueadorParser.NO_ADMINISTRADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bloqueadorParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, bloqueadorParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(bloqueadorParser.ACCION);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 62;
	            this.match(bloqueadorParser.COMILLA);
	        }

	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 188416) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 66;
	            this.match(bloqueadorParser.COMILLA);
	        }

	        this.state = 69;
	        this.match(bloqueadorParser.L_LLAVE);
	        this.state = 70;
	        this.match(bloqueadorParser.R_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

bloqueadorParser.EOF = antlr4.Token.EOF;
bloqueadorParser.REGLA = 1;
bloqueadorParser.ACCION = 2;
bloqueadorParser.CUANDO = 3;
bloqueadorParser.ENTONCES = 4;
bloqueadorParser.L_LLAVE = 5;
bloqueadorParser.R_LLAVE = 6;
bloqueadorParser.MAYOR = 7;
bloqueadorParser.COMILLA = 8;
bloqueadorParser.INTENTOS_FALLIDOS = 9;
bloqueadorParser.ACCESO_RECURSOS = 10;
bloqueadorParser.Y = 11;
bloqueadorParser.NO_ADMINISTRADOR = 12;
bloqueadorParser.AGREGAR_USUARIO_LN = 13;
bloqueadorParser.AGREGAR_IP_LN = 14;
bloqueadorParser.ACTIVAR_MONITOREO = 15;
bloqueadorParser.ACCESONOAUTORIZADO = 16;
bloqueadorParser.IDENTIFICADOR = 17;
bloqueadorParser.CADENA = 18;
bloqueadorParser.DIGITO = 19;
bloqueadorParser.WS = 20;

bloqueadorParser.RULE_prog = 0;
bloqueadorParser.RULE_dsl = 1;
bloqueadorParser.RULE_regla = 2;
bloqueadorParser.RULE_condicion = 3;
bloqueadorParser.RULE_multiplesIntentosFallidos = 4;
bloqueadorParser.RULE_actividadSospechosa = 5;
bloqueadorParser.RULE_comando = 6;
bloqueadorParser.RULE_accion = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_prog;
    }

	dsl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DslContext);
	    } else {
	        return this.getTypedRuleContext(DslContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_dsl;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_regla;
    }

	REGLA() {
	    return this.getToken(bloqueadorParser.REGLA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(bloqueadorParser.IDENTIFICADOR, 0);
	};

	L_LLAVE() {
	    return this.getToken(bloqueadorParser.L_LLAVE, 0);
	};

	CUANDO() {
	    return this.getToken(bloqueadorParser.CUANDO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(bloqueadorParser.ENTONCES, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	R_LLAVE() {
	    return this.getToken(bloqueadorParser.R_LLAVE, 0);
	};

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bloqueadorParser.COMILLA);
	    } else {
	        return this.getToken(bloqueadorParser.COMILLA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_condicion;
    }

	ACCESONOAUTORIZADO() {
	    return this.getToken(bloqueadorParser.ACCESONOAUTORIZADO, 0);
	};

	multiplesIntentosFallidos() {
	    return this.getTypedRuleContext(MultiplesIntentosFallidosContext,0);
	};

	actividadSospechosa() {
	    return this.getTypedRuleContext(ActividadSospechosaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesIntentosFallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_multiplesIntentosFallidos;
    }

	INTENTOS_FALLIDOS() {
	    return this.getToken(bloqueadorParser.INTENTOS_FALLIDOS, 0);
	};

	MAYOR() {
	    return this.getToken(bloqueadorParser.MAYOR, 0);
	};

	DIGITO() {
	    return this.getToken(bloqueadorParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterMultiplesIntentosFallidos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitMultiplesIntentosFallidos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitMultiplesIntentosFallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActividadSospechosaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_actividadSospechosa;
    }

	ACCESO_RECURSOS() {
	    return this.getToken(bloqueadorParser.ACCESO_RECURSOS, 0);
	};

	Y() {
	    return this.getToken(bloqueadorParser.Y, 0);
	};

	NO_ADMINISTRADOR() {
	    return this.getToken(bloqueadorParser.NO_ADMINISTRADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterActividadSospechosa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitActividadSospechosa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitActividadSospechosa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_comando;
    }

	AGREGAR_USUARIO_LN() {
	    return this.getToken(bloqueadorParser.AGREGAR_USUARIO_LN, 0);
	};

	AGREGAR_IP_LN() {
	    return this.getToken(bloqueadorParser.AGREGAR_IP_LN, 0);
	};

	ACTIVAR_MONITOREO() {
	    return this.getToken(bloqueadorParser.ACTIVAR_MONITOREO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bloqueadorParser.RULE_accion;
    }

	ACCION() {
	    return this.getToken(bloqueadorParser.ACCION, 0);
	};

	L_LLAVE() {
	    return this.getToken(bloqueadorParser.L_LLAVE, 0);
	};

	R_LLAVE() {
	    return this.getToken(bloqueadorParser.R_LLAVE, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(bloqueadorParser.IDENTIFICADOR, 0);
	};

	AGREGAR_USUARIO_LN() {
	    return this.getToken(bloqueadorParser.AGREGAR_USUARIO_LN, 0);
	};

	AGREGAR_IP_LN() {
	    return this.getToken(bloqueadorParser.AGREGAR_IP_LN, 0);
	};

	ACTIVAR_MONITOREO() {
	    return this.getToken(bloqueadorParser.ACTIVAR_MONITOREO, 0);
	};

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bloqueadorParser.COMILLA);
	    } else {
	        return this.getToken(bloqueadorParser.COMILLA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bloqueadorListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof bloqueadorVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




bloqueadorParser.ProgContext = ProgContext; 
bloqueadorParser.DslContext = DslContext; 
bloqueadorParser.ReglaContext = ReglaContext; 
bloqueadorParser.CondicionContext = CondicionContext; 
bloqueadorParser.MultiplesIntentosFallidosContext = MultiplesIntentosFallidosContext; 
bloqueadorParser.ActividadSospechosaContext = ActividadSospechosaContext; 
bloqueadorParser.ComandoContext = ComandoContext; 
bloqueadorParser.AccionContext = AccionContext; 
