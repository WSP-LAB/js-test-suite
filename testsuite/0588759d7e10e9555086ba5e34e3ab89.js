load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-23-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a built-in
    (Number)
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("delete Number;");
});
