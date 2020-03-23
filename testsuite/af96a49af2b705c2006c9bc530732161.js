load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-3-7
description: >
    Array.prototype.reduceRight - value of 'length' is a number (value
    is negative)
---*/

        var testResult1 = true;
        var testResult2 = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx > 1) {
                testResult1 = false;
            }

            if (idx === 1) {
                testResult2 = true;
            }
            return false;
        }

        var obj = { 1: 11, 2: 9, length: -4294967294 };

        Array.prototype.reduceRight.call(obj, callbackfn, 1);

assert(testResult1, 'testResult1 !== true');
assert.sameValue(testResult2, false, 'testResult2');