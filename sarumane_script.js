

/* 
 * Copyright 2012 Yutaka Kachi
 * This file is licensed by the MIT License
 */

var buffer;
var token;
var toktype;

var YYERRTOK = 256;
var NUMBER = 257;
var IDENT = 258;
var STRING = 259;
var COMMENT = 260;

  
/*
  #define yyclearin (yychar = -1)
  #define yyerrok (yyerrflag = 0)
  #define YYRECOVERING (yyerrflag != 0)
  #define YYERROR  goto yyerrlab
*/


/** Debug mode flag **/
var yydebug = false;

/** lexical element object **/
var yylval = null;

/** Dialog window **/
var yywin = null;
var yydoc = null;

function yydocopen() {
  if (yywin == null) {
    yywin = window.open("", "yaccdiag", "resizable,status,width=600,height=400");
    yydoc = null;
  }
  if (yydoc == null)
    yydoc = yywin.document;
  yydoc.open();
}

function yyprintln(msg)
{
  if (yydoc == null)
    yydocopen();
  yydoc.write(msg + "<br>");
}

function yyflush()
{
  if (yydoc != null) {
    yydoc.close();
    yydoc = null;
    yywin = null;
  }
}



var yytranslate = [
      0,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   10,   17,   17,
     11,   12,    8,    6,   13,    7,   17,    9,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   14,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   15,   17,   16,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,   17,   17,   17,   17,
     17,   17,   17,   17,   17,   17,    1,    2,    3,    4,
      5
  ];

var YYBADCH = 17;
var YYMAXLEX = 261;
var YYTERMS = 17;
var YYNONTERMS = 10;

var yyaction = [
     55,   27,   57,    0,   26,   10,   11,    2,   17,    8,
     37,   52,   12,   13,   14,    7,   10,   11,    3,    9,
     28,   38,    0,   29,   39,    0,    0,    0,   23,   24,
      0,   43,   44,   46,   45
  ];

var YYLAST = 35;

var yycheck = [
      2,    3,    4,    0,    3,    6,    7,   11,    3,   11,
      5,   12,    8,    9,   10,   14,    6,    7,   11,   13,
     12,   12,   -1,   12,   12,   -1,   -1,   -1,   15,   15,
     -1,   16,   16,   16,   16
  ];

var yybase = [
      0,   -1,   12,    8,   10,   10,   10,   -2,   -2,   -2,
     -2,   -2,   -2,   -2,   -2,   18,   15,    1,    4,    4,
      5,    9,   11,   17,   16,    3,    7,   -4,   13,   14,
      0,    4,   -2,   -2,    4,    4,    4,    0,    0,    0,
      0,    0,    0,    0,    0,    5,    5,   -4,    0,    0,
      0,    6,    6
  ];

var YY2TBLSTATE = 23;

var yydefault = [
      2,32767,32767,32767,   10,   12,   11,32767,32767,32767,
  32767,32767,32767,32767,32767,32767,32767,32767,   17,   18,
      1,32767,32767,    2,    2,32767,32767,   26,32767,32767
  ];



var yygoto = [
      5,    1,    6,   18,   19,   49,   50,   51,   22,   35,
     35,   15,   16,    0,   35
  ];

var YYGLAST = 15;

var yygcheck = [
      8,    8,    8,    8,    8,    8,    8,    8,    7,    5,
      5,    2,    2,   -1,    5
  ];

var yygbase = [
      0,    0,  -12,    0,    0,   -6,    0,    5,   -7,    0
  ];

var yygdefault = [
  -32768,   25,   20,   33,   34,   53,   36,   21,    4,   54
  ];

var yylhs = [
      0,    1,    2,    2,    3,    3,    3,    3,    5,    5,
      7,    7,    4,    6,    6,    6,    6,    8,    8,    8,
      8,    8,    8,    8,    8,    9,    9,    9
  ];

var yylen = [
      1,    1,    0,    2,    1,    1,    1,    1,    4,    3,
      1,    3,    3,    8,    7,    7,    6,    3,    3,    3,
      3,    3,    3,    1,    1,    1,    1,    1
  ];

var YYSTATES = 49;
var YYNLSTATES = 30;
var YYINTERRTOK = 1;
var YYUNEXPECTED = 32767;
var YYDEFAULT = -32766;

/*
 * Parser entry point
 */

function yyparse()
{
  var yyastk = new Array();
  var yysstk = new Array();

  yystate = 0;
  yychar = -1;

  yysp = 0;
  yysstk[yysp] = 0;
  yyerrflag = 0;
  for (;;) {
    if (yybase[yystate] == 0)
      yyn = yydefault[yystate];
    else {
      if (yychar < 0) {
        if ((yychar = yylex()) <= 0) yychar = 0;
        yychar = yychar < YYMAXLEX ? yytranslate[yychar] : YYBADCH;
      }

      if (((yyn = yybase[yystate] + yychar) >= 0
	    && yyn < YYLAST && yycheck[yyn] == yychar
           || (yystate < YY2TBLSTATE
               && (yyn = yybase[yystate + YYNLSTATES] + yychar) >= 0
               && yyn < YYLAST && yycheck[yyn] == yychar))
	  && (yyn = yyaction[yyn]) != YYDEFAULT) {
        /*
         * >= YYNLSTATE: shift and reduce
         * > 0: shift
         * = 0: accept
         * < 0: reduce
         * = -YYUNEXPECTED: error
         */
        if (yyn > 0) {
          /* shift */
          yysp++;

          yysstk[yysp] = yystate = yyn;
          yyastk[yysp] = yylval;
          yychar = -1;
          
          if (yyerrflag > 0)
            yyerrflag--;
          if (yyn < YYNLSTATES)
            continue;
            
          /* yyn >= YYNLSTATES means shift-and-reduce */
          yyn -= YYNLSTATES;
        } else
          yyn = -yyn;
      } else
        yyn = yydefault[yystate];
    }
      
    for (;;) {
      /* reduce/error */
      if (yyn == 0) {
        /* accept */
        yyflush();
        return 0;
      }
      else if (yyn != YYUNEXPECTED) {
        /* reduce */
        yyl = yylen[yyn];
        yyval = yyastk[yysp-yyl+1];
        /* Following line will be replaced by reduce actions */
        switch(yyn) {
        case 1:
{ return yyastk[yysp-(1-1)]; } break;
        case 2:
{ yyval = '';} break;
        case 3:
{ yyval = yyastk[yysp-(2-1)] + yyastk[yysp-(2-2)]+ '\n';} break;
        case 4:
{ yyval = yyastk[yysp-(1-1)] + ';' } break;
        case 5:
{ yyval = yyastk[yysp-(1-1)] + ';' } break;
        case 8:
{ yyval = yyastk[yysp-(4-1)] + '(' + yyastk[yysp-(4-3)] + ')';} break;
        case 9:
{ yyval = yyastk[yysp-(3-1)] + '()';} break;
        case 11:
{ yyval = yyastk[yysp-(3-1)] + ',' + yyastk[yysp-(3-3)];} break;
        case 12:
{ yyval = yyastk[yysp-(3-1)] + '=' + yyastk[yysp-(3-3)];} break;
        case 13:
{ yyval = yyastk[yysp-(8-1)] + ' ' + yyastk[yysp-(8-2)] + '(' + yyastk[yysp-(8-4)] + ')' + '{' + '\n' + yyastk[yysp-(8-7)] + '}';} break;
        case 14:
{ yyval = yyastk[yysp-(7-1)] + ' ' + yyastk[yysp-(7-2)] + '(' + yyastk[yysp-(7-4)] + ')' + '{}';} break;
        case 15:
{ yyval = yyastk[yysp-(7-1)] + ' ' + yyastk[yysp-(7-2)] + '()' + '{' + '\n' + yyastk[yysp-(7-6)] + '}';} break;
        case 16:
{ yyval = yyastk[yysp-(6-1)] + ' ' + yyastk[yysp-(6-2)] + '()' + '{}';} break;
        case 17:
{ yyval = yyastk[yysp-(3-1)] + '+' + yyastk[yysp-(3-3)]; } break;
        case 18:
{ yyval = yyastk[yysp-(3-1)] + '-' + yyastk[yysp-(3-3)]; } break;
        case 19:
{ yyval = yyastk[yysp-(3-1)] + '*' + yyastk[yysp-(3-3)]; } break;
        case 20:
{ yyval = yyastk[yysp-(3-1)] + '/' + yyastk[yysp-(3-3)]; } break;
        case 21:
{ yyval = yyastk[yysp-(3-1)] + '%' + yyastk[yysp-(3-3)]; } break;
        case 22:
{ yyval = '(' + yyastk[yysp-(3-2)] + ')'; } break;
        }
        /* Goto - shift nonterminal */
        yysp -= yyl;
        yyn = yylhs[yyn];
        if ((yyp = yygbase[yyn] + yysstk[yysp]) >= 0 && yyp < YYGLAST
            && yygcheck[yyp] == yyn)
          yystate = yygoto[yyp];
        else
          yystate = yygdefault[yyn];
          
        yysp++;

        yysstk[yysp] = yystate;
        yyastk[yysp] = yyval;
      }
      else {
        /* error */
        switch (yyerrflag) {
        case 0:
          yyerror("syntax error");
        case 1:
        case 2:
          yyerrflag = 3;
          /* Pop until error-expecting state uncovered */

          while (!((yyn = yybase[yystate] + YYINTERRTOK) >= 0
                   && yyn < YYLAST && yycheck[yyn] == YYINTERRTOK
                   || (yystate < YY2TBLSTATE
                       && (yyn = yybase[yystate + YYNLSTATES] + YYINTERRTOK) >= 0
                       && yyn < YYLAST && yycheck[yyn] == YYINTERRTOK))) {
            if (yysp <= 0) {
              yyflush();
              return 1;
            }
            yystate = yysstk[--yysp];
          }
          yyn = yyaction[yyn];
          yysstk[++yysp] = yystate = yyn;
          break;

        case 3:
          if (yychar == 0) {
            yyflush();
            return 1;
          }
          yychar = -1;
          break;
        }
      }
        
      if (yystate < YYNLSTATES)
        break;
      /* >= YYNLSTATES means shift-and-reduce */
      yyn = yystate - YYNLSTATES;
    }
  }
}



/* Lexical analyzer */

var buffer;
var token;
var yylval;
var toktype;

var Pjs;

function yylex() {
	//cut for space and tabs
	var res = buffer.match(/^\s+/);
	if (res != null) {
		buffer = buffer.substr(res[0].length);
	}

	//Empty
	if (buffer.length == 0) {
		return 0;
	}

	//COMMENT
	res = buffer.match(/^\/\//);
	if (res != null) {
		var index = buffer.indexOf("\n");

		if (index == "-1") {
			token = buffer;
		} else {
			token = buffer.substr(0, index);
		}

		buffer = buffer.substr(token.length);
		yylval = token + "";
		return COMMENT;
	}

	//IDENT
	res = buffer.match(/^[a-zA-Z_]\w*/);
	if (res != null) {
		token = res[0];
		buffer = buffer.substr(res[0].length);
		yylval = token + "";
		return IDENT;
	}

	//NUMBER
	res = buffer.match(/^\d+(\.\d+)?/);
	if (res != null) {
		token = res[0];
		buffer = buffer.substr(res[0].length);
		yylval = token - 0; //return numeric-data
		return NUMBER;
	}

	//Text String
	res = buffer.match(/^".*"|'.*'/);
	if (res != null) {
		token = res[0];
		buffer = buffer.substr(res[0].length);
		yylval = token + "";
		return STRING;
	}

	//Single symbol
	token = buffer.substr(0, 1);
    buffer = buffer.substr(1);
    return token.charCodeAt(0);
}

function yyerror(msg) {
  yyprintln(msg);
}

var _bro = (window.opera?
            4:(window.external?3:(window.controllers?1:(document.layers?2:0))));
var _ie5 = (navigator.appName.indexOf('Microsoft Internet Explorer')>=0 &&
            document.getElementById)?1:0;

// C
// _dom : kind of DOM.
// IE4 = 1, IE5+ = 2, NN4 = 3, NN6+ = 4, others = 0
var _dom = document.all ? (document.getElementById ? 2 : 1)
           : document.getElementById ? 4
           : document.layers ? 3 : 0;

function getDivFromName(nm) {
  if (_dom==4 || _dom==2)
    return document.getElementById(nm);
  if (_dom==1)
    return document.all(nm);
  if (_dom==3) {
    var s = '';
    for (var i = 1; i < arguments.length; i++)
      s += 'document.layers.'+arguments[i]+'.';
    return eval(s+'document.layers.'+nm);
  }
  return null;
}

function writeDivHTML(div,html) {
  if (document.layers) {
    div.document.open();
    div.document.write(html);
    div.document.close();
  }
  else if (typeof div.innerHTML!="undefined") {
    div.innerHTML = html;
  }
}

function setAnswer(ans) {
  ans= ans.replace(/\n/g,"<br>");
  writeDivHTML(getDivFromName("output"), ans);
}

function clearAnswer() {
  calc_vars = {};
  outputs = "";
  setAnswer(outputs);
}

function stopScript(){ // not work
    if (Pjs)
      Pjs.exit();
  }

function runScript() {
  	clearAnswer();
	buffer = document.compiledtext.one.value;
	var script = yyparse();
	setAnswer(script);
	
	stopScript();
	var canvas = document.getElementById('canvas0');
    try{
      Pjs = new Processing(canvas, script);
    }catch(e){
      alert(e);
    }
	return false;
}