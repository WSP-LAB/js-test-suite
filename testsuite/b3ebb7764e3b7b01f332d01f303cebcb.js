load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comments can not contain LINE FEED (U+000A) inside
 *
 * @path ch07/7.3/S7.3_A3.1_T2.js
 * @description Insert LINE FEED (\u000A) into begin of single line comment
 * @negative
 */

// CHECK#1
eval("//\u000A single line comment");

