load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-13
description: Array.prototype.reduce applied to the JSON object
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return ('[object JSON]' === Object.prototype.toString.call(obj));
        }

            JSON.length = 1;
            JSON[0] = 1;

assert(Array.prototype.reduce.call(JSON, callbackfn, 1), 'Array.prototype.reduce.call(JSON, callbackfn, 1) !== true');
