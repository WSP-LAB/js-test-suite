load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-14
description: Array.prototype.forEach - 'length' is a string containing -Infinity
---*/

        var accessed2 = false;

        function callbackfn2(val, idx, obj) {
            accessed2 = true;
        }

        var obj2 = { 0: 9, length: "-Infinity" };

        Array.prototype.forEach.call(obj2, callbackfn2);

assert.sameValue(accessed2, false, 'accessed2');