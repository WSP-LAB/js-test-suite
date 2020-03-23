load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g2-3
description: A JSONString may not be delimited by Uncode escaped quotes
---*/

assert.throws(SyntaxError, function() {
  JSON.parse("\\u0022abc\\u0022");
});
