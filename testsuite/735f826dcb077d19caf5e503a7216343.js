load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Block can't be inside of expression
 *
 * @path ch12/12.1/S12.1_A4_T2.js
 * @description Checking if execution of "y={x}" fails
 * @negative
 */

x=1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={x};
//
//////////////////////////////////////////////////////////////////////////////

