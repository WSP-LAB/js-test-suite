load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-152
description: >
    Object.defineProperties - 'O' is an Array, 'name' is the length
    property of 'O', test RangeError is thrown when the [[Value]]
    field of 'desc' is boundary value 2^32 (15.4.5.1 step 3.c)
---*/

        var arr = [];
assert.throws(RangeError, function() {
            Object.defineProperties(arr, {
                length: {
                    value: 4294967296
                }
            });
});
assert.sameValue(arr.length, 0, 'arr.length');
