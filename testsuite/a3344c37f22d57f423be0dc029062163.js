load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "in"-expression is not allowed as a ExpressionNoIn in "for (ExpressionNoIn; FirstExpression; SecondExpression) Statement" IterationStatement
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A4_T2.js
 * @description Checking if execution of "for (1 in arr;1;){}" fails
 * @negative
 */

arr = [1,2,3,4,5];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for(1 in arr;1;) {
    break;
}
//
//////////////////////////////////////////////////////////////////////////////


