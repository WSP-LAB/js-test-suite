load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-31
description: Array.prototype.reduce - Date object can be used as accumulator
---*/

        var objDate = new Date();

        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objDate;
        }

        var obj = { 0: 11, length: 1 };

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, objDate), true, 'Array.prototype.reduce.call(obj, callbackfn, objDate)');
assert(accessed, 'accessed !== true');
