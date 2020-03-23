load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-27-s
description: >
    Strict Mode - TypeError is thrown after deleting a property,
    calling preventExtensions, and attempting to reassign the property
flags: [onlyStrict]
---*/

        var a = {x:0, get y() { return 0;}};
        delete a.x;
        Object.preventExtensions(a);
assert.throws(TypeError, function() {
            a.x = 1;
});
