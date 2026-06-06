// Generated from f:/TAREAS/ing en sistemas/sintaxis y semantica de lenguaje/analizaor sintacticop/calculadora/53809/lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import lenguajeListener from './lenguajeListener.js';
import lenguajeVisitor from './lenguajeVisitor.js';

const serializedATN = [4,1,22,101,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,
1,3,1,27,8,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,1,3,1,37,8,1,1,1,3,1,40,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,5,3,53,8,3,10,3,12,3,56,
9,3,1,3,1,3,1,4,1,4,1,4,5,4,63,8,4,10,4,12,4,66,9,4,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,88,8,7,10,
7,12,7,91,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,99,8,8,1,8,0,1,14,9,0,2,4,6,8,
10,12,14,16,0,3,1,0,12,14,1,0,17,18,1,0,15,16,105,0,21,1,0,0,0,2,39,1,0,
0,0,4,41,1,0,0,0,6,50,1,0,0,0,8,59,1,0,0,0,10,67,1,0,0,0,12,71,1,0,0,0,14,
78,1,0,0,0,16,98,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,26,3,4,2,0,25,27,5,21,
0,0,26,25,1,0,0,0,26,27,1,0,0,0,27,40,1,0,0,0,28,29,3,10,5,0,29,31,5,1,0,
0,30,32,5,21,0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,40,1,0,0,0,33,34,3,12,6,
0,34,36,5,1,0,0,35,37,5,21,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,40,1,0,0,0,
38,40,5,21,0,0,39,24,1,0,0,0,39,28,1,0,0,0,39,33,1,0,0,0,39,38,1,0,0,0,40,
3,1,0,0,0,41,42,5,8,0,0,42,43,5,2,0,0,43,44,3,8,4,0,44,45,5,3,0,0,45,48,
3,6,3,0,46,47,5,9,0,0,47,49,3,6,3,0,48,46,1,0,0,0,48,49,1,0,0,0,49,5,1,0,
0,0,50,54,5,4,0,0,51,53,3,2,1,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,
0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,5,0,0,58,7,1,0,0,0,59,
64,3,14,7,0,60,61,7,0,0,0,61,63,3,14,7,0,62,60,1,0,0,0,63,66,1,0,0,0,64,
62,1,0,0,0,64,65,1,0,0,0,65,9,1,0,0,0,66,64,1,0,0,0,67,68,5,19,0,0,68,69,
5,6,0,0,69,70,3,14,7,0,70,11,1,0,0,0,71,72,5,10,0,0,72,73,5,7,0,0,73,74,
5,11,0,0,74,75,5,2,0,0,75,76,3,14,7,0,76,77,5,3,0,0,77,13,1,0,0,0,78,79,
6,7,-1,0,79,80,3,16,8,0,80,89,1,0,0,0,81,82,10,3,0,0,82,83,7,1,0,0,83,88,
3,14,7,4,84,85,10,2,0,0,85,86,7,2,0,0,86,88,3,14,7,3,87,81,1,0,0,0,87,84,
1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,15,1,0,0,0,91,89,1,
0,0,0,92,93,5,2,0,0,93,94,3,14,7,0,94,95,5,3,0,0,95,99,1,0,0,0,96,99,5,19,
0,0,97,99,5,20,0,0,98,92,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,17,1,0,0,
0,11,21,26,31,36,39,48,54,64,87,89,98];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class lenguajeParser extends antlr4.Parser {

    static grammarFileName = "lenguaje.g4";
    static literalNames = [ null, "';'", "'('", "')'", "'{'", "'}'", "'='", 
                            "'.'", "'if'", "'else'", "'console'", "'log'", 
                            "'>'", "'<'", "'=='", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "IF", "ELSE", "CONSOLE", "LOG", "MAYOR", "MENOR", 
                             "IGUAL", "MAS", "MENOS", "MULT", "DIVISION", 
                             "IDENT", "NUMERO", "SALTOLINEA", "ES" ];
    static ruleNames = [ "programa", "sentencia", "sentenciaIf", "bloque", 
                         "condicion", "sentenciaAsignacion", "sentenciaConsola", 
                         "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lenguajeParser.ruleNames;
        this.literalNames = lenguajeParser.literalNames;
        this.symbolicNames = lenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2622720) !== 0)) {
	            this.state = 18;
	            this.sentencia();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lenguajeParser.RULE_sentencia);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            localctx = new SentenciaIfEtiqContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.sentenciaIf();
	            this.state = 26;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 25;
	                this.match(lenguajeParser.SALTOLINEA);

	            }
	            break;
	        case 19:
	            localctx = new SentenciaAsignEtiqContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.sentenciaAsignacion();
	            this.state = 29;
	            this.match(lenguajeParser.T__0);
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 30;
	                this.match(lenguajeParser.SALTOLINEA);

	            }
	            break;
	        case 10:
	            localctx = new SentenciaConsolaEtiqContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.sentenciaConsola();
	            this.state = 34;
	            this.match(lenguajeParser.T__0);
	            this.state = 36;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 35;
	                this.match(lenguajeParser.SALTOLINEA);

	            }
	            break;
	        case 21:
	            localctx = new BlancaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.match(lenguajeParser.SALTOLINEA);
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



	sentenciaIf() {
	    let localctx = new SentenciaIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, lenguajeParser.RULE_sentenciaIf);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(lenguajeParser.IF);
	        this.state = 42;
	        this.match(lenguajeParser.T__1);
	        this.state = 43;
	        this.condicion();
	        this.state = 44;
	        this.match(lenguajeParser.T__2);
	        this.state = 45;
	        this.bloque();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 46;
	            this.match(lenguajeParser.ELSE);
	            this.state = 47;
	            this.bloque();
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



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, lenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(lenguajeParser.T__3);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2622720) !== 0)) {
	            this.state = 51;
	            this.sentencia();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(lenguajeParser.T__4);
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
	    this.enterRule(localctx, 8, lenguajeParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.expresion(0);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0)) {
	            this.state = 60;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 61;
	            this.expresion(0);
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	sentenciaAsignacion() {
	    let localctx = new SentenciaAsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, lenguajeParser.RULE_sentenciaAsignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(lenguajeParser.IDENT);
	        this.state = 68;
	        this.match(lenguajeParser.T__5);
	        this.state = 69;
	        this.expresion(0);
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



	sentenciaConsola() {
	    let localctx = new SentenciaConsolaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, lenguajeParser.RULE_sentenciaConsola);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(lenguajeParser.CONSOLE);
	        this.state = 72;
	        this.match(lenguajeParser.T__6);
	        this.state = 73;
	        this.match(lenguajeParser.LOG);
	        this.state = 74;
	        this.match(lenguajeParser.T__1);
	        this.state = 75;
	        this.expresion(0);
	        this.state = 76;
	        this.match(lenguajeParser.T__2);
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


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, lenguajeParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new TerminoExprContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 79;
	        this.termino();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 87;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, lenguajeParser.RULE_expresion);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 82;
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 83;
	                    this.expresion(4);
	                    break;

	                case 2:
	                    localctx = new MasMenosContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, lenguajeParser.RULE_expresion);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 85;
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 86;
	                    this.expresion(3);
	                    break;

	                } 
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, lenguajeParser.RULE_termino);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new ParentesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(lenguajeParser.T__1);
	            this.state = 93;
	            this.expresion(0);
	            this.state = 94;
	            this.match(lenguajeParser.T__2);
	            break;
	        case 19:
	            localctx = new IdentificadorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(lenguajeParser.IDENT);
	            break;
	        case 20:
	            localctx = new NumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.match(lenguajeParser.NUMERO);
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


}

lenguajeParser.EOF = antlr4.Token.EOF;
lenguajeParser.T__0 = 1;
lenguajeParser.T__1 = 2;
lenguajeParser.T__2 = 3;
lenguajeParser.T__3 = 4;
lenguajeParser.T__4 = 5;
lenguajeParser.T__5 = 6;
lenguajeParser.T__6 = 7;
lenguajeParser.IF = 8;
lenguajeParser.ELSE = 9;
lenguajeParser.CONSOLE = 10;
lenguajeParser.LOG = 11;
lenguajeParser.MAYOR = 12;
lenguajeParser.MENOR = 13;
lenguajeParser.IGUAL = 14;
lenguajeParser.MAS = 15;
lenguajeParser.MENOS = 16;
lenguajeParser.MULT = 17;
lenguajeParser.DIVISION = 18;
lenguajeParser.IDENT = 19;
lenguajeParser.NUMERO = 20;
lenguajeParser.SALTOLINEA = 21;
lenguajeParser.ES = 22;

lenguajeParser.RULE_programa = 0;
lenguajeParser.RULE_sentencia = 1;
lenguajeParser.RULE_sentenciaIf = 2;
lenguajeParser.RULE_bloque = 3;
lenguajeParser.RULE_condicion = 4;
lenguajeParser.RULE_sentenciaAsignacion = 5;
lenguajeParser.RULE_sentenciaConsola = 6;
lenguajeParser.RULE_expresion = 7;
lenguajeParser.RULE_termino = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_programa;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_sentencia;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SentenciaConsolaEtiqContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	sentenciaConsola() {
	    return this.getTypedRuleContext(SentenciaConsolaContext,0);
	};

	SALTOLINEA() {
	    return this.getToken(lenguajeParser.SALTOLINEA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaConsolaEtiq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaConsolaEtiq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaConsolaEtiq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.SentenciaConsolaEtiqContext = SentenciaConsolaEtiqContext;

class SentenciaIfEtiqContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	sentenciaIf() {
	    return this.getTypedRuleContext(SentenciaIfContext,0);
	};

	SALTOLINEA() {
	    return this.getToken(lenguajeParser.SALTOLINEA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaIfEtiq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaIfEtiq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaIfEtiq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.SentenciaIfEtiqContext = SentenciaIfEtiqContext;

class SentenciaAsignEtiqContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	sentenciaAsignacion() {
	    return this.getTypedRuleContext(SentenciaAsignacionContext,0);
	};

	SALTOLINEA() {
	    return this.getToken(lenguajeParser.SALTOLINEA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaAsignEtiq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaAsignEtiq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaAsignEtiq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.SentenciaAsignEtiqContext = SentenciaAsignEtiqContext;

class BlancaContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SALTOLINEA() {
	    return this.getToken(lenguajeParser.SALTOLINEA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterBlanca(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitBlanca(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitBlanca(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.BlancaContext = BlancaContext;

class SentenciaIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_sentenciaIf;
    }

	IF() {
	    return this.getToken(lenguajeParser.IF, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(lenguajeParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaIf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_bloque;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitBloque(this);
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
        this.ruleIndex = lenguajeParser.RULE_condicion;
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	MAYOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lenguajeParser.MAYOR);
	    } else {
	        return this.getToken(lenguajeParser.MAYOR, i);
	    }
	};


	MENOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lenguajeParser.MENOR);
	    } else {
	        return this.getToken(lenguajeParser.MENOR, i);
	    }
	};


	IGUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lenguajeParser.IGUAL);
	    } else {
	        return this.getToken(lenguajeParser.IGUAL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaAsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_sentenciaAsignacion;
    }

	IDENT() {
	    return this.getToken(lenguajeParser.IDENT, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaConsolaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_sentenciaConsola;
    }

	CONSOLE() {
	    return this.getToken(lenguajeParser.CONSOLE, 0);
	};

	LOG() {
	    return this.getToken(lenguajeParser.LOG, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterSentenciaConsola(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitSentenciaConsola(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitSentenciaConsola(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TerminoExprContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterTerminoExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitTerminoExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitTerminoExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.TerminoExprContext = TerminoExprContext;

class MasMenosContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	MAS() {
	    return this.getToken(lenguajeParser.MAS, 0);
	};

	MENOS() {
	    return this.getToken(lenguajeParser.MENOS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterMasMenos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitMasMenos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitMasMenos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.MasMenosContext = MasMenosContext;

class MultDivContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	MULT() {
	    return this.getToken(lenguajeParser.MULT, 0);
	};

	DIVISION() {
	    return this.getToken(lenguajeParser.DIVISION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterMultDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitMultDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitMultDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.MultDivContext = MultDivContext;

class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lenguajeParser.RULE_termino;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterParentesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitParentesis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.ParentesisContext = ParentesisContext;

class NumeroContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(lenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.NumeroContext = NumeroContext;

class IdentificadorContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENT() {
	    return this.getToken(lenguajeParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lenguajeListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof lenguajeVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

lenguajeParser.IdentificadorContext = IdentificadorContext;


lenguajeParser.ProgramaContext = ProgramaContext; 
lenguajeParser.SentenciaContext = SentenciaContext; 
lenguajeParser.SentenciaIfContext = SentenciaIfContext; 
lenguajeParser.BloqueContext = BloqueContext; 
lenguajeParser.CondicionContext = CondicionContext; 
lenguajeParser.SentenciaAsignacionContext = SentenciaAsignacionContext; 
lenguajeParser.SentenciaConsolaContext = SentenciaConsolaContext; 
lenguajeParser.ExpresionContext = ExpresionContext; 
lenguajeParser.TerminoContext = TerminoContext; 
