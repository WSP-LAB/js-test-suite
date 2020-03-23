load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-8
description: >
    Array.prototype.every - element to be retrieved is inherited data
    property on an Array
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val !== 13;
            } else {
                return true;
            }
        }

            Array.prototype[1] = 13;

assert.sameValue([, , , ].every(callbackfn), false, '[, , , ].every(callbackfn)');
