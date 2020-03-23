load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
es5id: 13.0-15-s
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    a FunctionDeclaration is contained in strict mode code within eval
    code
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("'use strict'; function _13_0_15_fun() {eval = 42;};");
            _13_0_15_fun();
});
