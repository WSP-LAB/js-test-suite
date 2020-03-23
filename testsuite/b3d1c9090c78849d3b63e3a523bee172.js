load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * While evaluating "for (ExpressionNoIn; Expression; Expression) Statement", ExpressionNoIn is evaulated first
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A2.js
 * @description Using "(function(){throw "NoInExpression"})()" as ExpressionNoIn
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for((function(){throw "NoInExpression";})(); (function(){throw "FirstExpression";})(); (function(){throw "SecondExpression";})()) {
		var in_for = "reached";
	}
	$ERROR('#1: (function(){throw "NoInExpression";})() lead to throwing exception');
} catch (e) {
	if (e !== "NoInExpression") {
		$ERROR('#1: When for (ExpressionNoIn ; Expression ; Expression) Statement is evaluated ExpressionNoIn evaluates first');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (in_for !== undefined) {
	$ERROR('#2: in_for === undefined. Actual:  in_for ==='+ in_for  );
}
//
//////////////////////////////////////////////////////////////////////////////

