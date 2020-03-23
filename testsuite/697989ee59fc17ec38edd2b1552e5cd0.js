load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Correct interpretation of DIGITS
 *
 * @path ch07/7.8/7.8.4/S7.8.4_A2.3_T1.js
 * @description Check DIGITS
 */

//CHECK#0-9
var unicode = ["\u0030", "\u0031", "\u0032", "\u0033", "\u0034", "\u0035", "\u0036", "\u0037", "\u0038", "\u0039"];
var character = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (var index = 0; index <= 9; index++) {
  if (unicode[index] !== character[index]) {
    $ERROR('#' + character[index] + ' ');
  }
}

