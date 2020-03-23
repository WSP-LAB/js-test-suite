load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-1-12
description: Array.prototype.some applied to RegExp object
---*/

        function callbackfn(val, idx, obj) {
            return obj instanceof RegExp;
        }

        var obj = new RegExp();
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 9;

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
