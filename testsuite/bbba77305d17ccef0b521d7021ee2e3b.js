load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-0-5
description: >
    <ZWSPP> is not valid JSON whitespace as specified by the
    production JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
    JSON.parse('\u200b1234'); // should produce a syntax error 
});
