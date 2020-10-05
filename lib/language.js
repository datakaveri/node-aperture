/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var language = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[1,15],$V9=[9,15,19,20,21,26,28,38,39,40,41,42,43,44,45],$Va=[38,39,40,41,42,43,44,45],$Vb=[9,11,14,15,19,20,21,26,28,38,39,40,41,42,43,44,45],$Vc=[9,19,20,21,28],$Vd=[2,26],$Ve=[1,24],$Vf=[9,19,20,21],$Vg=[2,28],$Vh=[1,32],$Vi=[1,34],$Vj=[1,35],$Vk=[1,36],$Vl=[1,37],$Vm=[2,15],$Vn=[1,45],$Vo=[1,46],$Vp=[1,47],$Vq=[9,11,14,19,20,21,22,28,30,33,34,37,38,39,40,45],$Vr=[1,59],$Vs=[1,64],$Vt=[1,62],$Vu=[1,63],$Vv=[16,31,35,36,38,39,40,45],$Vw=[1,71],$Vx=[9,22,33],$Vy=[1,72],$Vz=[9,11,22,33],$VA=[30,34,38,39,40,45],$VB=[1,95],$VC=[14,33];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Rule":3,"List":4,"Effect":5,"For":6,"At":7,"Conditions":8,"EOF":9,"Identifier":10,"AND":11,"LongList":12,"All":13,",":14,"CAN":15,"NOT":16,"If":17,"OrCondition":18,"IF":19,"WHEN":20,"WHERE":21,"OR":22,"AndCondition":23,"NotCondition":24,"Condition":25,"FOR":26,"String":27,"AT":28,"Lhs":29,"IN":30,"(":31,"CommaSeparatedList":32,")":33,"MATCH":34,"CONSUMER-IN-GROUP":35,"AUTHORIZED-BY":36,"::":37,"STRING":38,"STRING_LITERAL":39,"FUZZY_STRING":40,"REGEX_LITERAL":41,"ALL":42,"EVERYTHING":43,"ANYTHING":44,"*":45,"$accept":0,"$end":1},
terminals_: {2:"error",9:"EOF",11:"AND",14:",",15:"CAN",16:"NOT",19:"IF",20:"WHEN",21:"WHERE",22:"OR",26:"FOR",28:"AT",30:"IN",31:"(",33:")",34:"MATCH",35:"CONSUMER-IN-GROUP",36:"AUTHORIZED-BY",37:"::",38:"STRING",39:"STRING_LITERAL",40:"FUZZY_STRING",41:"REGEX_LITERAL",42:"ALL",43:"EVERYTHING",44:"ANYTHING",45:"*"},
productions_: [0,[3,8],[3,7],[3,7],[3,6],[4,1],[4,3],[4,1],[4,1],[12,6],[12,5],[12,3],[5,1],[5,2],[8,2],[8,0],[17,1],[17,1],[17,1],[18,3],[18,1],[23,3],[23,1],[24,2],[24,1],[6,3],[6,0],[7,3],[7,0],[25,3],[25,5],[25,5],[25,4],[25,4],[25,3],[29,3],[29,1],[32,1],[32,3],[10,1],[10,1],[10,1],[10,1],[13,1],[13,1],[13,1],[13,1],[27,1],[27,1],[27,1],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            return {
                principals: $$[$0-7],
                effect: $$[$0-6],
                actions: $$[$0-5],
                resources: $$[$0-4],
		expiry: $$[$0-3],
                at: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 2:

            return {
                principals: $$[$0-6],
                effect: $$[$0-5],
                actions: $$[$0-4],
		for: $$[$0-3],
		at: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 3:

            return {
                effect: $$[$0-6],
                actions: $$[$0-5],
                resources: $$[$0-4],
		for: $$[$0-3],
		at: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 4:

            return {
                effect: $$[$0-5],
                actions: $$[$0-4],
		for: $$[$0-3],
		at: $$[$0-2],
                conditions: $$[$0-1]
            };
        
break;
case 5:

            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 6:

            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 8:

            this.$ = 1;
        
break;
case 9:

            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-5] instanceof RegExp) {
                this.$.regex.push($$[$0-5].toString());
            } else {
                this.$.exact[$$[$0-5]] = true;
            }

            if ($$[$0-3] instanceof RegExp) {
                this.$.regex.push($$[$0-3].toString());
            } else {
                this.$.exact[$$[$0-3]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 10:

            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-4] instanceof RegExp) {
                this.$.regex.push($$[$0-4].toString());
            } else {
                this.$.exact[$$[$0-4]] = true;
            }

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 11:

            if ($$[$0-2] instanceof RegExp) {
                $$[$0].regex.push($$[$0-2].toString());
            } else {
                $$[$0].exact[$$[$0-2]] = true;
            }
            this.$ = $$[$0];
        
break;
case 12:

            this.$ = true;
        
break;
case 13:

            this.$ = false;
        
break;
case 14:

            this.$ = $$[$0];
        
break;
case 15:

            this.$ = [];
        
break;
case 19:

            this.$ = ['or', $$[$0-2], $$[$0]];
        
break;
case 21:

            this.$ = ['and', $$[$0-2], $$[$0]];
        
break;
case 23:

            this.$ = ['not', $$[$0]];
        
break;
case 25:

            var op = $$[$0-2].toLowerCase();
            var time = parseInt($$[$0-1],10); 
            var units = $$[$0].toLowerCase();
            
            if (time < 0)
		CHECK_YOUR_RULE ("time must be > 0");	

            switch (units)
            {
		case 'second':
		case 'seconds':
			time = time;
			break;

		case 'minute':
		case 'minutes':
			time = time*60;
			break;

		case 'hour':
		case 'hours':
			time = time*60*60;
			break;

		case 'day':
		case 'days':
			time = time*60*60*24;
			break;

		case 'week':
		case 'weeks':
			time = time*60*60*24*7;
			break;

		case 'month':
		case 'months':
			time = time*60*60*24*30;
			break;

		case 'year':
		case 'years':
			time = time*60*60*24*365;
			break;

		default:
			PLEASE_CHECK_YOUR_RULE ("Unit for time must be: 'days', 'hours', 'minutes', etc.");
            }

	    if (time > 31536000)
		PLEASE_CHECK_YOUR_RULE("Maximum expiry is 1 year");

            this.$ = time; 
        
break;
case 26:

		this.$ = 3600; // 1 hour 
	
break;
case 27:

            var amount		= $$[$0-1]; 
            var currency	= $$[$0].toUpperCase();
            
            if (isNaN(amount))
		CHECK_YOUR_RULE ("amount must be a number");	

	    amount = parseFloat(amount);

            if (isNaN(amount) || amount < 0 || amount > 10000)
		CHECK_YOUR_RULE ("amount must be > 0 and < 10000");	

            if (currency !== "INR")
		CHECK_YOUR_RULE ("currency must be INR");	

            this.$ = {"amount" : amount, "currency" : currency};
        
break;
case 28:

		this.$ = {"amount" : 0.00, "currency" : "INR"}; // 0 INR 
	
break;
case 29:

            var lhs = $$[$0-2];
            var op = $$[$0-1].toLowerCase();
            var rhs = $$[$0];
            yy.validate(op, lhs.name, rhs, lhs.type);
            this.$ = [ op, lhs, rhs ];
        
break;
case 30: case 31:

            var lhs = $$[$0-4];
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', lhs.name, i, lhs.type);
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 32:

            var lhs = '';
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', 'groups', i, 'string');
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 33:

            var lhs = '';
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];

            this.$ = [ op, lhs , rhs];
        
break;
case 34:

            this.$ = $$[$0-1];
        
break;
case 35:

            this.$ = {name: $$[$0-2], type: $$[$0]};
        
break;
case 36:

            this.$ = {name: $$[$0]};
        
break;
case 37:

            this.$ = [ $$[$0] ];
        
break;
case 38:

            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 41:

            this.$ = new RegExp(fuzzyToRegex($$[$0]));
        
break;
case 42:

            var literal = $$[$0];
            var last = literal.lastIndexOf("/");
            var body = literal.substring(1, last);
            var flags = literal.substring(last + 1);
            this.$ = new RegExp(body, flags);
        
break;
}
},
table: [{3:1,4:2,5:3,10:4,12:5,13:6,15:$V0,38:$V1,39:$V2,40:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},{1:[3]},{5:16,15:$V0},{4:17,10:4,12:5,13:6,38:$V1,39:$V2,40:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},o($V9,[2,5],{11:[1,18],14:[1,19]}),o($V9,[2,7]),o($V9,[2,8]),o($Va,[2,12],{16:[1,20]}),o($Vb,[2,39]),o($Vb,[2,40]),o($Vb,[2,41]),o($Vb,[2,42]),o($V9,[2,43]),o($V9,[2,44]),o($V9,[2,45]),o($V9,[2,46]),{4:21,10:4,12:5,13:6,38:$V1,39:$V2,40:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},o($Vc,$Vd,{10:4,12:5,13:6,4:22,6:23,26:$Ve,38:$V1,39:$V2,40:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8}),{10:25,38:$V1,39:$V2,40:$V3,41:$V4},{10:26,12:27,38:$V1,39:$V2,40:$V3,41:$V4},o($Va,[2,13]),o($Vc,$Vd,{10:4,12:5,13:6,4:28,6:29,26:$Ve,38:$V1,39:$V2,40:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8}),o($Vc,$Vd,{6:30,26:$Ve}),o($Vf,$Vg,{7:31,28:$Vh}),{27:33,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($V9,[2,6]),{11:[1,39],14:[1,38]},o($V9,[2,11]),o($Vc,$Vd,{6:40,26:$Ve}),o($Vf,$Vg,{7:41,28:$Vh}),o($Vf,$Vg,{7:42,28:$Vh}),{8:43,9:$Vm,17:44,19:$Vn,20:$Vo,21:$Vp},{27:48,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{27:49,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vq,[2,47]),o($Vq,[2,48]),o($Vq,[2,49]),o($Vq,[2,50]),{10:26,11:[1,50],12:27,38:$V1,39:$V2,40:$V3,41:$V4},{10:51,38:$V1,39:$V2,40:$V3,41:$V4},o($Vf,$Vg,{7:52,28:$Vh}),{8:53,9:$Vm,17:44,19:$Vn,20:$Vo,21:$Vp},{8:54,9:$Vm,17:44,19:$Vn,20:$Vo,21:$Vp},{9:[1,55]},{16:$Vr,18:56,23:57,24:58,25:60,27:65,29:61,31:$Vs,35:$Vt,36:$Vu,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vv,[2,16]),o($Vv,[2,17]),o($Vv,[2,18]),{27:66,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vc,[2,25]),{10:67,38:$V1,39:$V2,40:$V3,41:$V4},o($V9,[2,10]),{8:68,9:$Vm,17:44,19:$Vn,20:$Vo,21:$Vp},{9:[1,69]},{9:[1,70]},{1:[2,4]},{9:[2,14],22:$Vw},o($Vx,[2,20],{11:$Vy}),o($Vz,[2,22]),{16:$Vr,24:73,25:60,27:65,29:61,31:$Vs,35:$Vt,36:$Vu,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vz,[2,24]),{27:74,30:[1,75],34:[1,76],38:$Vi,39:$Vj,40:$Vk,45:$Vl},{31:[1,77]},{31:[1,78]},{16:$Vr,18:79,23:57,24:58,25:60,27:65,29:61,31:$Vs,35:$Vt,36:$Vu,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($VA,[2,36],{37:[1,80]}),o($Vf,[2,27]),o($V9,[2,9]),{9:[1,81]},{1:[2,2]},{1:[2,3]},{16:$Vr,23:82,24:58,25:60,27:65,29:61,31:$Vs,35:$Vt,36:$Vu,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{16:$Vr,24:83,25:60,27:65,29:61,31:$Vs,35:$Vt,36:$Vu,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vz,[2,23]),{27:84,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{31:[1,85]},{31:[1,86]},{27:88,32:87,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{27:89,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{22:$Vw,33:[1,90]},{27:91,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{1:[2,1]},o($Vx,[2,19],{11:$Vy}),o($Vz,[2,21]),o($Vz,[2,29]),{27:88,32:92,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{27:88,32:93,38:$Vi,39:$Vj,40:$Vk,45:$Vl},{14:$VB,33:[1,94]},o($VC,[2,37]),{33:[1,96]},o($Vz,[2,34]),o($VA,[2,35]),{14:$VB,33:[1,97]},{14:$VB,33:[1,98]},o($Vz,[2,32]),{27:99,38:$Vi,39:$Vj,40:$Vk,45:$Vl},o($Vz,[2,33]),o($Vz,[2,30]),o($Vz,[2,31]),o($VC,[2,38])],
defaultActions: {55:[2,4],69:[2,2],70:[2,3],81:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/**
 * Extremely roundabout way of processing escaped asterisks in a fuzzy string,
 * since Javascript doesn't support negative lookbehinds.
 *
 * First, escape all RegExp special characters. Unescaped * will now be '\*' and
 * escaped * will now be '\\\*'.
 * Replace '\\\*' with '*'. All literal * will have no backslashes before them.
 * Replace '\*' with '.*'. All fuzzy * will now be '.*'
 * Finally, replace all * with no . before them into '\*' using negative
 * lookahead.
 *
 * as\*d*f -> as\\\*d\*f -> as*d\*f -> as*d.*f -> as\*d.*f
 */
function fuzzyToRegex(str) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    str = str.replace('\\\\\\*', '*');
    str = str.replace('\\*', '.*');
    str = str.replace(/(?:([^\.]))\*/,'$1\\*');
    return (str);
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whritespace */
break;
case 1:return 9;
break;
case 2:return 11;
break;
case 3:return 22;
break;
case 4:return 16;
break;
case 5:return 15;
break;
case 6:return 'TO';
break;
case 7:return 19;
break;
case 8:return 20;
break;
case 9:return 21;
break;
case 10:return 42;
break;
case 11:return 43;
break;
case 12:return 44;
break;
case 13:return 30;
break;
case 14:return 34;
break;
case 15:return 26;
break;
case 16:return 28;
break;
case 17:return 35;
break;
case 18:return 36;
break;
case 19:return 37;
break;
case 20:return 14;
break;
case 21:return 31;
break;
case 22:return 33;
break;
case 23:
        yy_.yytext = yy_.yytext.substr(0, yy_.yytext.lastIndexOf('::'));
        return "REGEX_LITERAL";
    
break;
case 24:
        yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
        return 39;
    
break;
case 25:
        if (yy_.yytext === '*') {
            return 45;
        } else if (yy_.yytext.match(/[*]/)) {
            return 40;
        } else {
            return 38;
        }
    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:$)/i,/^(?:AND\b)/i,/^(?:OR\b)/i,/^(?:NOT\b)/i,/^(?:CAN\b)/i,/^(?:TO\b)/i,/^(?:IF\b)/i,/^(?:WHEN\b)/i,/^(?:WHERE\b)/i,/^(?:ALL\b)/i,/^(?:EVERYTHING\b)/i,/^(?:ANYTHING\b)/i,/^(?:IN\b)/i,/^(?:MATCH\b)/i,/^(?:FOR\b)/i,/^(?:@)/i,/^(?:CONSUMER-IN-GROUP\b)/i,/^(?:AUTHORIZED-BY\b)/i,/^(?:::)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:(\/((([^\n\r\*\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))(([^\n\r\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))*)\/([a-z]*))::regexp?)/i,/^(?:"(?:(\\)["bfnrt\/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/i,/^(?:([^\s,():](:(?!:))?)+)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = language;
exports.Parser = language.Parser;
exports.parse = function () { return language.parse.apply(language, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}