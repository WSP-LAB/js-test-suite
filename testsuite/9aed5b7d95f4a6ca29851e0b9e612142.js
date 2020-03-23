load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LINE FEED (U+000A) may occur between any two tokens
 *
 * @path ch07/7.3/S7.3_A1.1_T2.js
 * @description Insert real LINE FEED between tokens of var x=1
 */

//CHECK#1
var
x
=
1;
if (x !== 1) {
  $ERROR('#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ' + (x));
}

