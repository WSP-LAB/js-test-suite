load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comment can contain HORIZONTAL TAB (U+0009)
 *
 * @path ch07/7.2/S7.2_A3.1_T2.js
 * @description Use real HORIZONTAL TAB
 */

//CHECK#1
var x = 0;
//	single	line	comment	x = 1;
if (x !== 0) {
  $ERROR('#1: var x = 0; //	single	line	comment	x = 1; x === 0. Actual: ' + (x));
}

