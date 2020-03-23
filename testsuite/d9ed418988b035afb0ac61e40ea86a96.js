load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * An ExpressionStatement can not start with the function keyword because that might make it ambiguous with a FunctionDeclaration
 *
 * @path ch12/12.4/S12.4_A1.js
 * @description Checking if execution of "function(){}()" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
function(){}();
//
//////////////////////////////////////////////////////////////////////////////

