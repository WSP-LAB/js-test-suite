load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comments can not contain LINE SEPARATOR (U+2028) inside
 *
 * @path ch07/7.3/S7.3_A3.3_T2.js
 * @description Insert LINE SEPARATOR (\u2028) into begin of single line comment
 * @negative
 */

// CHECK#1
eval("//\u2028 single line comment");

