load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-ii-10
description: >
    Array.prototype.filter - callbackfn is called with 1 formal
    parameter
---*/

        function callbackfn(val) {
            return val > 10;
        }
        var newArr = [12].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 12, 'newArr[0]');
