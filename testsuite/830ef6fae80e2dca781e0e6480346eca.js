load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-189
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' is own data property that overrides an
    inherited accessor property  (15.4.5.1 step 4.c)
---*/

var arr = [];

assert.throws(TypeError, function() {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 11;
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                value: 12,
                configurable: false
            });

            Object.defineProperties(arr, {
                "0": {
                    configurable: true
                }
            });
});
assert.sameValue(arr[0], 12, 'arr[0]');
assert.sameValue(Array.prototype[0], 11, 'Array.prototype[0]');
