load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: NullLiteral
 *
 * @path ch07/7.8/7.8.1/S7.8.1_A1_T1.js
 * @description Check null === null
 */

//CHECK#1
if (null !== null) {
  $ERROR('#1: null === null');
} 

