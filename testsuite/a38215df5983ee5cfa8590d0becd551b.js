load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-20-s
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears in the middle of the block
flags: [noStrict]
---*/

        function fun() {
            eval("var public = 1;");
            "use strict";
            assert.sameValue(public, 1);
        }
        fun();
