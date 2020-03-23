load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpression within a "while" Expression is allowed
 *
 * @path ch12/12.6/12.6.2/S12.6.2_A14_T1.js
 * @description Using "function __func(){return 0;}" as an Expression
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
while(function __func(){return 0;}){
   var __reached = 1;
   break;
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== 1) {
	$ERROR('#2: function expression inside of while expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

