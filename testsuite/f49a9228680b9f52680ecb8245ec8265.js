load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-35
description: >
    Object.defineProperty - 'O' is a String object which implements
    its own [[GetOwnProperty]] method to access the 'name' property
    (8.12.9 step 1)
---*/

        var str = new String("abc");

        Object.defineProperty(str, "foo", {
            value: 12,
            configurable: false
        });
assert.throws(TypeError, function() {
            Object.defineProperty(str, "foo", {
                value: 11,
                configurable: true
            });
});
assert.sameValue(str.foo, 12, 'str.foo');
