load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-ii-19
description: Array.prototype.filter - non-indexed properties are not called
---*/

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val === 8;
        }

        var obj = { 0: 11, non_index_property: 8, 2: 5, length: 20 };
        var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert(accessed, 'accessed !== true');
