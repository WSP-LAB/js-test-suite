load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-i-27
description: >
    Array.prototype.forEach - This object is the Arguments object
    which implements its own property get method (number of arguments
    is greater than number of parameters)
---*/

        var called = 0;
        var testResult = false;

        function callbackfn(val, idx, obj) {
            called++;
            if (called !== 1 && !testResult) {
                return;
            }
            if (idx === 0) {
                testResult = (val === 11);
            } else if (idx === 1) {
                testResult = (val === 12);
            } else if (idx === 2) {
                testResult = (val === 9);
            } else {
                testResult = false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.forEach.call(arguments, callbackfn);
        };

        func(11, 12, 9);

assert(testResult, 'testResult !== true');