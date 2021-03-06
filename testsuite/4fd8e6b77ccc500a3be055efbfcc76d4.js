load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-2
description: >
    Array.prototype.lastIndexOf -  added properties in step 5 are
    visible here on an Array-like object
---*/

        var arr = { length: 30 };
        var targetObj = function () { };

        var fromIndex = {
            valueOf: function () {
                arr[4] = targetObj;
                return 10;
            }
        };
        

assert.sameValue(Array.prototype.lastIndexOf.call(arr, targetObj, fromIndex), 4, 'Array.prototype.lastIndexOf.call(arr, targetObj, fromIndex)');
