load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g1-4
description: The JSON lexical grammar treats <SP> as a whitespace character
---*/

assert.sameValue(JSON.parse(' 1234'), 1234, '<SP> should be ignored');

assert.throws(SyntaxError, function() {
    JSON.parse('12 34');
}, '<SP> should produce a syntax error as whitespace results in two tokens');
