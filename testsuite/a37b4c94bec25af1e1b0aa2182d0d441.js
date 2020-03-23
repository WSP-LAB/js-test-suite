load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics
 *
 * @path ch11/11.6/11.6.1/S11.6.1_A4_T9.js
 * @description The addition operator is not always associative ( x + y + z is the same (x + y) + z, not x + (y + z))
 */

//CHECK#1
if (-Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE !== (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE) {
  $ERROR('#1: -Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE === (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE. Actual: ' + (-Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE));
} 

//CHECK#2
if ((-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE === -Number.MAX_VALUE + (Number.MAX_VALUE + Number.MAX_VALUE)) {
  $ERROR('#2: (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE === -Number.MAX_VALUE + (Number.MAX_VALUE + Number.MAX_VALUE). Actual: ' + ((-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE));
}

//CHECK#3
if ("1" + 1 + 1 !== ("1" + 1) + 1) {
  $ERROR('#3: "1" + 1 + 1 === ("1" + 1) + 1. Actual: ' + ("1" + 1 + 1));
} 

//CHECK#4
if (("1" + 1) + 1 === "1" + (1 + 1)) {
  $ERROR('#4: ("1" + 1) + 1 !== "1" + (1 + 1)');
}

