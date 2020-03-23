load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-3
description: Array.prototype.reduce applied to boolean primitive
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return  obj instanceof Boolean;
        }

            Boolean.prototype[0] = true;
            Boolean.prototype.length = 1;

assert(Array.prototype.reduce.call(false, callbackfn, 1), 'Array.prototype.reduce.call(false, callbackfn, 1) !== true');
