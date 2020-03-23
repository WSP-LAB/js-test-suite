load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-6-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable which
    is a primitive type (string)
flags: [onlyStrict]
---*/

        var _11_4_1_5 = "abc";
assert.throws(SyntaxError, function() {
            eval("delete _11_4_1_5;");
});
