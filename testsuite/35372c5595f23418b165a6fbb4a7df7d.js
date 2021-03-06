load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-11
description: >
    Array.prototype.lastIndexOf - deleting own property causes index
    property not to be visited on an Array-like object
---*/

        var arr = { length: 200 };

        Object.defineProperty(arr, "1", {
            get: function () {
                return 6.99;
            },
            configurable: true
        });

        Object.defineProperty(arr, "100", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.lastIndexOf.call(arr, 6.99), -1, 'Array.prototype.lastIndexOf.call(arr, 6.99)');
