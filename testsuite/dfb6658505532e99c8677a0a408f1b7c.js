load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-2-4
description: >
    Array.prototype.filter - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

        var arrProtoLen;

        function callbackfn(val, idx, obj) {
            return obj.length === 2;
        }

            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            var newArr = [12, 11].filter(callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
