load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-iii-8
description: >
    Array.prototype.every - return value of callbackfn is a number
    (value is positive number)
---*/

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return 5;
        }

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
