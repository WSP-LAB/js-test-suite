load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-28
description: >
    Array.prototype.lastIndexOf - value of 'length' is boundary value
    (2^32)
---*/

        var targetObj = {};
        var obj = {
            0: targetObj,
            4294967294: targetObj,
            4294967295: targetObj,
            length: 4294967296
        };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, targetObj), 4294967295, 'verify length is 4294967296 finally');
