load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LINE FEED (U+000A) within strings is not allowed
 *
 * @path ch07/7.3/S7.3_A2.1_T2.js
 * @description Use real LINE FEED into string
 * @negative
 */

//CHECK#1
"
str
ing
";

