load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "DecimalLiteral :: ExponentPart is incorrect"
es5id: 7.8.3_A4.1_T3
description: "ExponentPart :: e DecimalDigits"
---*/

assert.throws(ReferenceError, function() {
  e-1
});