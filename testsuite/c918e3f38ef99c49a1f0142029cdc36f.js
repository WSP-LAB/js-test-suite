load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-8
description: Array.prototype.reduceRight applied to String object
---*/

        var obj = new String("hello\nworld\\!");
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, o) {
            accessed = true;
            return o instanceof String;
        }

assert(Array.prototype.reduceRight.call(obj, callbackfn, "h"), 'Array.prototype.reduceRight.call(obj, callbackfn, "h") !== true');
assert(accessed, 'accessed !== true');
