load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-18
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function on an Array
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === undefined);
            }
        }

        var arr = [, 1, 2];

        Object.defineProperty(arr, "0", {
            set: function () { },
            configurable: true
        });

        arr.reduce(callbackfn);

assert(testResult, 'testResult !== true');
