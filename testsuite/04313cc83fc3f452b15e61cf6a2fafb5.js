load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
es5id: 15.1.2.2_A2_T4
description: "StrWhiteSpaceChar :: FF (U+000C)"
---*/

//CHECK#1
if (parseInt("\u000C1") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u000C1") === parseInt("1"). Actual: ' + (parseInt("\u000C1")));
}

//CHECK#2
if (parseInt("\u000C\u000C-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u000C\\u000C-1") === parseInt("-1"). Actual: ' + (parseInt("\u000C\u000C-1")));
}

//CHECK#3
assert.sameValue(parseInt("\u000C"), NaN);
