load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-iii-1-5
description: >
    Array.prototype.filter - values of 'to' are passed in acending
    numeric order
---*/

        var arr = [0, 1, 2, 3, 4];
        var lastToIdx = 0;
        var called = 0;
        function callbackfn(val, idx, obj) {
            called++;
            if (lastToIdx !== idx) {
                return false;
            } else {
                lastToIdx++;
                return true;
            }
        }
        var newArr = arr.filter(callbackfn);

assert.sameValue(newArr.length, 5, 'newArr.length');
assert.sameValue(called, 5, 'called');
