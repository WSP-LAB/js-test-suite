load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration cannot be localed inside an Expression
 *
 * @path ch14/14.0/S14_A2.js
 * @description Declaring a function within an "if" Expression
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof f !== 'undefined') {
	$ERROR('#1: typeof f === \'undefined\'. Actual:  typeof f ==='+ typeof f  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (function f(arg){
	if (arg===0)
	   return 1;
	else
	   return f(arg-1)*arg;
}(3)!==6) {
	$ERROR('#2: FunctionDeclaration cannot be localed inside an Expression');
};
//
//////////////////////////////////////////////////////////////////////////////

