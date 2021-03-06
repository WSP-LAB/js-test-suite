load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-22
description: >
    Array.prototype.some - element to be retrieved is inherited
    accessor property without a get function on an Array
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return typeof val === "undefined";
            }
            return false;
        }

            Object.defineProperty(Array.prototype, "0", {
                set: function () { },
                configurable: true
            });

assert([, ].some(callbackfn), '[, ].some(callbackfn) !== true');
