load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-14
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property that overrides an inherited accessor property on
    an Array-like object
---*/

        var obj = { length: 1 };

            Object.defineProperty(Object.prototype, "0", {
                get: function () {
                    return false;
                },
                configurable: true
            });

            Object.defineProperty(obj, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 0, 'Array.prototype.lastIndexOf.call(obj, true)');
