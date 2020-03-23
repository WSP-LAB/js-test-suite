load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.0-1
description: >
    13.0 - multiple names in one function declaration is not allowed,
    two function names
---*/


assert.throws(SyntaxError, function() {
            eval("function x, y() {}");
});
