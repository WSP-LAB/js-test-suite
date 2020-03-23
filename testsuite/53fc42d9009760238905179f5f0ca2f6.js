load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If ToBoolean(x) is false, return x
 *
 * @path ch11/11.11/11.11.1/S11.11.1_A3_T4.js
 * @description Type(x) or Type(y) is changed between null and undefined
 */

//CHECK#1
if ((undefined && true) !== undefined) {
  $ERROR('#1: (undefined && true) === undefined');
}

//CHECK#2
if ((null && false) !== null) {
  $ERROR('#2: (null && false) === null');
}

