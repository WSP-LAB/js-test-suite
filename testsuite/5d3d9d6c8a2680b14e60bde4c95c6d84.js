load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of ToString conversion from boolean value is "true" if
 * the argument is "true", else is "false"
 *
 * @path ch09/9.8/S9.8_A3_T2.js
 * @description True and false convert to String by implicit transformation
 */

// CHECK#1
if (false + "" !== "false") {
  $ERROR('#1: false + "" === "false". Actual: ' + (false + ""));
}

// CHECK#2
if (true + "" !== "true") {
  $ERROR('#2: true + "" === "true". Actual: ' + (true + ""));	
}

