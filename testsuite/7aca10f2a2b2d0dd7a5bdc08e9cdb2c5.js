load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-10
description: Array.prototype.reduceRight applied to the Math object
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return '[object Math]' === Object.prototype.toString.call(obj);
        }

            Math.length = 1;
            Math[0] = 1;

assert(Array.prototype.reduceRight.call(Math, callbackfn, 1), 'Array.prototype.reduceRight.call(Math, callbackfn, 1) !== true');
assert(accessed, 'accessed !== true');
