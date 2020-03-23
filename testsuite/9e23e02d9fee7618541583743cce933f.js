load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * HORIZONTAL TAB (U+0009) may occur within strings
 *
 * @path ch07/7.2/S7.2_A2.1_T1.js
 * @description Use HORIZONTAL TAB(\u0009 and \t)
 */

// CHECK#1
if (eval("'\u0009str\u0009ing\u0009'") !== "\u0009str\u0009ing\u0009") {
  $ERROR('#1: eval("\'\\u0009str\\u0009ing\\u0009\'") === "\\u0009str\\u0009ing\\u0009"');
}

//CHECK#2
if (eval("'\tstr\ting\t'") !== "\tstr\ting\t") {
  $ERROR('#2: eval("\'\\tstr\\ting\\t\'") === "\\tstr\\ting\\t"');
}

