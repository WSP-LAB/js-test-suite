load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-8
description: >
    Array.prototype.map - element to be retrieved is inherited data
    property on an Array
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val === 13;
            }
            return false;
        }

            Array.prototype[1] = 13;

            var newArr = [, , , ].map(callbackfn);

assert.sameValue(newArr[1], true, 'newArr[1]');
