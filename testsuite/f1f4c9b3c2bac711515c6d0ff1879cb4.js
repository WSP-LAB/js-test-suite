load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-10
description: >
    Array.prototype.lastIndexOf - properties can be added to prototype
    after current position are visited on an Array
---*/

        var arr = [0, , 2];

        Object.defineProperty(arr, "2", {
            get: function () {
                Object.defineProperty(Array.prototype, "1", {
                    get: function () {
                        return 6.99;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

assert.sameValue(arr.lastIndexOf(6.99), 1, 'arr.lastIndexOf(6.99)');