load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x >>> y returns ToNumber(x) >>> ToNumber(y)
 *
 * @path ch11/11.7/11.7.3/S11.7.3_A3_T1.2.js
 * @description Type(x) and Type(y) vary between primitive number and Number object
 */

//CHECK#1
if (1 >>> 1 !== 0) {
  $ERROR('#1: 1 >>> 1 === 0. Actual: ' + (1 >>> 1));
}

//CHECK#2
if (new Number(1) >>> 1 !== 0) {
  $ERROR('#2: new Number(1) >>> 1 === 0. Actual: ' + (new Number(1) >>> 1));
}

//CHECK#3
if (1 >>> new Number(1) !== 0) {
  $ERROR('#3: 1 >>> new Number(1) === 0. Actual: ' + (1 >>> new Number(1)));
}

//CHECK#4
if (new Number(1) >>> new Number(1) !== 0) {
  $ERROR('#4: new Number(1) >>> new Number(1) === 0. Actual: ' + (new Number(1) >>> new Number(1)));
}


