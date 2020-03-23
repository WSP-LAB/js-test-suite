load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If m is +0 or -0, return the string "0"
 *
 * @path ch09/9.8/9.8.1/S9.8.1_A2.js
 * @description +0 and -0 convert to String by explicit transformation
 */

// CHECK#1
if (String(+0) !== "0") {
  $ERROR('#1: String(+0) === "0". Actual: ' + (String(+0)));
}

// CHECK#2
if (String(-0) !== "0") {
  $ERROR('#2: String(-0) === "0". Actual: ' + (String(-0)));
}

