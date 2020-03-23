load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the [[Call]] property for a Function object is called,
 * the body is evaluated and if evaluation result has type "normal", then "undefined" is returned
 *
 * @path ch13/13.2/S13.2.1_A9.1_T1.js
 * @description Declaring a function with "function __func()" and no "return" in the function body
 */

var x;

function __func(){
    x = true;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func() !== undefined) {
	$ERROR('#1: __func() === undefined. Actual: __func() ==='+__func());
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!x) {
	$ERROR('#2: x === true. Actual: x === '+x);
}
//
//////////////////////////////////////////////////////////////////////////////

