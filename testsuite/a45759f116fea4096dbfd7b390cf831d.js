load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "return" without a function body leads to syntax error
 *
 * @path ch12/12.9/S12.9_A1_T8.js
 * @description Checking if execution of "return x" with no function, placed into a loop, fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do {
    var x=1;
    return x;
    var y=2;
} while(0);
//
//////////////////////////////////////////////////////////////////////////////

