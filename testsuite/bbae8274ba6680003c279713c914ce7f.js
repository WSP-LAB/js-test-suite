load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-ii-6
description: Array.prototype.some - arguments to callbackfn are self consistent
---*/

        var obj = { 0: 11, length: 1 };
        var thisArg = {};

        function callbackfn() {
            return this === thisArg && arguments[0] === 11 && arguments[1] === 0 && arguments[2] === obj;
        }

assert(Array.prototype.some.call(obj, callbackfn, thisArg), 'Array.prototype.some.call(obj, callbackfn, thisArg) !== true');
