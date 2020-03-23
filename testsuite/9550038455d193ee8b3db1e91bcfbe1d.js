load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) and Type(y) are Undefined-s, return false
 *
 * @path ch11/11.9/11.9.5/S11.9.5_A6.1.js
 * @description void 0, eval("var x") is undefined
 */

//CHECK#1
if (undefined !== undefined) {
  $ERROR('#1: undefined === undefined');
}

//CHECK#2
if (void 0 !== undefined) {
  $ERROR('#2: void 0 === undefined');
}

//CHECK#3
if (undefined !== eval("var x")) {
  $ERROR('#3: undefined === eval("var x")');
}

