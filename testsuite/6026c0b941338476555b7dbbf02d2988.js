load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-4
description: >
    Array.prototype.reduceRight - properties added into own object in
    step 8 can be visited on an Array-like object
---*/

        var testResult = false;

        function callbackfn(preVal, curVal, idx, obj) {
            if (idx === 0 && curVal === 0) {
                testResult = true;
            }
        }

        var obj = { length: 2 };

        Object.defineProperty(obj, "1", {
            get: function () {
                Object.defineProperty(obj, "0", {
                    get: function () {
                        return 0;
                    },
                    configurable: true
                });
                return 1;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
