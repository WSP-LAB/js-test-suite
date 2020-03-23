load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * CARRIAGE RETURN (U+000D) within strings is not allowed
 *
 * @path ch07/7.3/S7.3_A2.2_T1.js
 * @description Insert CARRIAGE RETURN (\u000D) into string
 * @negative
 */

// CHECK#1
if (eval("'\u000Dstr\u000Ding\u000D'") === "\u000Dstr\u000Ding\u000D") {
  $ERROR('#1: eval("\'\\u000Dstr\\u000Ding\\u000D\'") === "\\u000Dstr\\u000Ding\\u000D"');
}

