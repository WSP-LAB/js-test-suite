load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-4
description: >
    Array.prototype.reduceRight - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

        var accessed = false;
        var arrProtoLen;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;

assert([12, 11].reduceRight(callbackfn, 11), '[12, 11].reduceRight(callbackfn, 11) !== true');
assert(accessed, 'accessed !== true');
