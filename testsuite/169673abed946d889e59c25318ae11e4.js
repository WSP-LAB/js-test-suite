load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminator between LeftHandSideExpression and "--" is not allowed
es5id: 11.3.2_A1.1_T4
description: Checking Line separator
---*/

assert.throws(SyntaxError, function() {
  eval("var x = 1; x\u2029--");
});
