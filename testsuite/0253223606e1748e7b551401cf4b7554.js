load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-ii-23
description: >
    Array.prototype.some - callbackfn called with correct parameters
    (this object O is correct)
---*/

        var obj = { 0: 11, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            return obj === o;
        }

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
