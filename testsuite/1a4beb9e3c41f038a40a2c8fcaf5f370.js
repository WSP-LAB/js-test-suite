load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-1-5
description: Array.prototype.some applied to number primitive
---*/

        function callbackfn(val, idx, obj) {
            return obj instanceof Number;
        }

            Number.prototype[1] = true;
            Number.prototype.length = 2;

assert(Array.prototype.some.call(5, callbackfn), 'Array.prototype.some.call(5, callbackfn) !== true');
