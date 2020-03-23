load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-3-28
description: Array.prototype.map - value of 'length' is boundary value (2^32)
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            0: 12,
            length: 4294967296
        };
assert.throws(RangeError, function() {
            var newArr = Array.prototype.map.call(obj, callbackfn);
});
