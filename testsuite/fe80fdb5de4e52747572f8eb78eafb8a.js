load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-20
description: >
    Array.prototype.lastIndexOf - element to be retrieved is an own
    accessor property without a get function that overrides an
    inherited accessor property on an Array
---*/

        var arr = [, 1];

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 100;
                },
                configurable: true
            });
            Object.defineProperty(arr, "0", {
                set: function () { },
                configurable: true
            });

assert(arr.hasOwnProperty(0), 'arr.hasOwnProperty(0) !== true');
assert.sameValue(arr.lastIndexOf(undefined), 0, 'arr.lastIndexOf(undefined)');
