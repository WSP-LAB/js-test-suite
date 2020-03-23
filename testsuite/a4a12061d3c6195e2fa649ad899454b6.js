load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-12
description: >
    Array.prototype.reduceRight - callbackfn is called with 3 formal
    parameter
---*/

        var testResult = false;
        var arr = [11, 12, 13];
        var initVal = 6.99;

        function callbackfn(prevVal, curVal, idx) {
            if (idx === 2) {
                testResult = (prevVal === initVal);
            }
            return curVal > 10 && arguments[3][idx] === curVal;
        }

assert.sameValue(arr.reduceRight(callbackfn, initVal), true, 'arr.reduceRight(callbackfn, initVal)');
assert(testResult, 'testResult !== true');
