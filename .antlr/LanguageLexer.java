// Generated from f:/TAREAS/ing en sistemas/sintaxis y semantica de lenguaje/analizaor sintacticop/calculadora/53809/Language.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LanguageLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, IF=8, ELSE=9, 
		CONSOLE=10, LOG=11, GT=12, LT=13, EQ=14, ADD=15, SUB=16, MUL=17, DIV=18, 
		ID=19, NUM=20, NEWLINE=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "IF", "ELSE", 
			"CONSOLE", "LOG", "GT", "LT", "EQ", "ADD", "SUB", "MUL", "DIV", "ID", 
			"NUM", "LETTER", "DIGIT", "NEWLINE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'('", "')'", "'{'", "'}'", "'='", "'.'", "'if'", "'else'", 
			"'console'", "'log'", "'>'", "'<'", "'=='", "'+'", "'-'", "'*'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "IF", "ELSE", "CONSOLE", 
			"LOG", "GT", "LT", "EQ", "ADD", "SUB", "MUL", "DIV", "ID", "NUM", "NEWLINE", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public LanguageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Language.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0016\u0082\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012g\b\u0012\n\u0012"+
		"\f\u0012j\t\u0012\u0001\u0013\u0004\u0013m\b\u0013\u000b\u0013\f\u0013"+
		"n\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0003\u0016x\b\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0004\u0017}\b\u0017\u000b\u0017\f\u0017~\u0001\u0017\u0001\u0017\u0000"+
		"\u0000\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0000+\u0000"+
		"-\u0015/\u0016\u0001\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0002\u0000"+
		"\t\t  \u0085\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000-\u0001"+
		"\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00011\u0001\u0000\u0000"+
		"\u0000\u00033\u0001\u0000\u0000\u0000\u00055\u0001\u0000\u0000\u0000\u0007"+
		"7\u0001\u0000\u0000\u0000\t9\u0001\u0000\u0000\u0000\u000b;\u0001\u0000"+
		"\u0000\u0000\r=\u0001\u0000\u0000\u0000\u000f?\u0001\u0000\u0000\u0000"+
		"\u0011B\u0001\u0000\u0000\u0000\u0013G\u0001\u0000\u0000\u0000\u0015O"+
		"\u0001\u0000\u0000\u0000\u0017S\u0001\u0000\u0000\u0000\u0019U\u0001\u0000"+
		"\u0000\u0000\u001bW\u0001\u0000\u0000\u0000\u001dZ\u0001\u0000\u0000\u0000"+
		"\u001f\\\u0001\u0000\u0000\u0000!^\u0001\u0000\u0000\u0000#`\u0001\u0000"+
		"\u0000\u0000%b\u0001\u0000\u0000\u0000\'l\u0001\u0000\u0000\u0000)p\u0001"+
		"\u0000\u0000\u0000+r\u0001\u0000\u0000\u0000-w\u0001\u0000\u0000\u0000"+
		"/|\u0001\u0000\u0000\u000012\u0005;\u0000\u00002\u0002\u0001\u0000\u0000"+
		"\u000034\u0005(\u0000\u00004\u0004\u0001\u0000\u0000\u000056\u0005)\u0000"+
		"\u00006\u0006\u0001\u0000\u0000\u000078\u0005{\u0000\u00008\b\u0001\u0000"+
		"\u0000\u00009:\u0005}\u0000\u0000:\n\u0001\u0000\u0000\u0000;<\u0005="+
		"\u0000\u0000<\f\u0001\u0000\u0000\u0000=>\u0005.\u0000\u0000>\u000e\u0001"+
		"\u0000\u0000\u0000?@\u0005i\u0000\u0000@A\u0005f\u0000\u0000A\u0010\u0001"+
		"\u0000\u0000\u0000BC\u0005e\u0000\u0000CD\u0005l\u0000\u0000DE\u0005s"+
		"\u0000\u0000EF\u0005e\u0000\u0000F\u0012\u0001\u0000\u0000\u0000GH\u0005"+
		"c\u0000\u0000HI\u0005o\u0000\u0000IJ\u0005n\u0000\u0000JK\u0005s\u0000"+
		"\u0000KL\u0005o\u0000\u0000LM\u0005l\u0000\u0000MN\u0005e\u0000\u0000"+
		"N\u0014\u0001\u0000\u0000\u0000OP\u0005l\u0000\u0000PQ\u0005o\u0000\u0000"+
		"QR\u0005g\u0000\u0000R\u0016\u0001\u0000\u0000\u0000ST\u0005>\u0000\u0000"+
		"T\u0018\u0001\u0000\u0000\u0000UV\u0005<\u0000\u0000V\u001a\u0001\u0000"+
		"\u0000\u0000WX\u0005=\u0000\u0000XY\u0005=\u0000\u0000Y\u001c\u0001\u0000"+
		"\u0000\u0000Z[\u0005+\u0000\u0000[\u001e\u0001\u0000\u0000\u0000\\]\u0005"+
		"-\u0000\u0000] \u0001\u0000\u0000\u0000^_\u0005*\u0000\u0000_\"\u0001"+
		"\u0000\u0000\u0000`a\u0005/\u0000\u0000a$\u0001\u0000\u0000\u0000bh\u0003"+
		")\u0014\u0000cg\u0003)\u0014\u0000dg\u0003+\u0015\u0000eg\u0005_\u0000"+
		"\u0000fc\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000fe\u0001\u0000"+
		"\u0000\u0000gj\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000hi\u0001"+
		"\u0000\u0000\u0000i&\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"km\u0003+\u0015\u0000lk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000"+
		"nl\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000o(\u0001\u0000\u0000"+
		"\u0000pq\u0007\u0000\u0000\u0000q*\u0001\u0000\u0000\u0000rs\u0007\u0001"+
		"\u0000\u0000s,\u0001\u0000\u0000\u0000tu\u0005\r\u0000\u0000ux\u0005\n"+
		"\u0000\u0000vx\u0005\n\u0000\u0000wt\u0001\u0000\u0000\u0000wv\u0001\u0000"+
		"\u0000\u0000xy\u0001\u0000\u0000\u0000yz\u0006\u0016\u0000\u0000z.\u0001"+
		"\u0000\u0000\u0000{}\u0007\u0002\u0000\u0000|{\u0001\u0000\u0000\u0000"+
		"}~\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000~\u007f\u0001\u0000"+
		"\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0006\u0017"+
		"\u0001\u0000\u00810\u0001\u0000\u0000\u0000\u0006\u0000fhnw~\u0002\u0000"+
		"\u0001\u0000\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}