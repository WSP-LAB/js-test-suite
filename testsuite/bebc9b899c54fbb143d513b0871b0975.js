load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Zero "\0" not terminates the string(C string)
 *
 * @path ch08/8.4/S8.4_A5.js
 * @description Insert "\0" into string
 */

// CHECK#1
if ("x\0y" === "x") {
  $ERROR('#1: "x\\0y" !== "x"');
}

// CHECK#2
if (!(("x\0a" < "x\0b") && ("x\0b" < "x\0c"))) {
  $ERROR('#2: (("x\\0a" < "x\\0b") && ("x\\0b" < "x\\0c")) === true');
}

