load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Arguments : (ArgumentList : ArgumentList,, AssignmentExpression) is a bad syntax
 *
 * @path ch11/11.2/11.2.4/S11.2.4_A1.3_T1.js
 * @description incorrect syntax
 * @negative
 */

function f_arg() {
}

f_arg(1,,2);

