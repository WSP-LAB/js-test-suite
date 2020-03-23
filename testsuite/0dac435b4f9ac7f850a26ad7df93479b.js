load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-6
description: >
    Array.prototype.lastIndexOf -  deleted properties of step 5 are
    visible here on an Array
---*/

        var arr = [];
        arr[10] = "10";
        arr.length = 20;

        var fromIndex = {
            valueOf: function () {
                delete arr[10];
                return 11;
            }
        };

assert.sameValue(arr.lastIndexOf("10", fromIndex), -1, 'arr.lastIndexOf("10", fromIndex)');