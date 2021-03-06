load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Expression in "do-while" IterationStatement is bracketed with braces
 *
 * @path ch12/12.6/12.6.1/S12.6.1_A6_T2.js
 * @description Checking if execution of "do{} while 0" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do break; while 0;
//
//////////////////////////////////////////////////////////////////////////////

