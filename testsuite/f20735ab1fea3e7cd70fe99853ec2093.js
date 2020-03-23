load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of break without an IterationStatement leads to syntax error
 *
 * @path ch12/12.8/S12.8_A1_T1.js
 * @description Checking if break statement with no loop fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x=1;
break;
var y=2;
//
//////////////////////////////////////////////////////////////////////////////

