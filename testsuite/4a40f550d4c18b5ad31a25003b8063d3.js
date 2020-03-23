load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of continue without an IterationStatement leads to syntax error
 *
 * @path ch12/12.7/S12.7_A1_T2.js
 * @description Checking if single "continue" with Label but without any IterationStatement fails
 * @negative
 */

LABEL : x=3.14;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x=1;
continue LABEL;
var y=2;
//
//////////////////////////////////////////////////////////////////////////////

