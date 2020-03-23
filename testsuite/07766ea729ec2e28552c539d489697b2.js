load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * IdentifierStart :: _
 *
 * @path ch07/7.6/S7.6_A1.3_T1.js
 * @description Create variable _
 */

//CHECK#1
var _ = 1;
if (_ !== 1) {
  $ERROR('#1: var _ = 1; _ === 1. Actual: ' + (_));
}

