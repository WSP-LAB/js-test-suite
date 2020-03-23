load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-19
description: >
    Array.prototype.filter - the Arguments object can be used as
    thisArg
---*/

        var accessed = false;
        var arg;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === arg;
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        var newArr = [11].filter(callbackfn, arg);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
