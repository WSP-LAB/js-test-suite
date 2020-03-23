load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_7-2-2-s
description: >
    Strict Mode - SyntaxError is thrown when an assignment to a
    reserved word is made in  a strict FunctionBody of a
    PropertyAssignment
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("var data = \"data\";\
            var obj = {\
                set _11_1_5_7_2_2(value) {\
                    public = 42;\
                    data = value;\
                }\
            };\
            obj._11_1_5_7_2_2 = 1;");
});
