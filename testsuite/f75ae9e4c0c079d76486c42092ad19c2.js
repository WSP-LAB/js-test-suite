load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-iii-27
description: >
    Array.prototype.every - return value of callbackfn is the global
    object
---*/

var global = this;
        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return global;
        }

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
