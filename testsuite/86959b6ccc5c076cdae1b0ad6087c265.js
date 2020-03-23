load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-22-s
description: >
    Strict Mode - Function code of a FunctionExpression contains Use
    Strict Directive which appears at the start of the block
flags: [noStrict]
---*/

assert.throws(SyntaxError, function () {
            "use strict";

                eval("var public = 1;");
});
