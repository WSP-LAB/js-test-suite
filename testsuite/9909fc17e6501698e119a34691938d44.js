load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-b-4
description: >
    Object.getOwnPropertyNames - elements of the returned array are
    writable
---*/

        var obj = { "a": "a" };

        var result = Object.getOwnPropertyNames(obj);

            var beforeOverride = (result[0] === "a");
            result[0] = "b";
            var afterOverride = (result[0] === "b");

assert(beforeOverride, 'beforeOverride !== true');
assert(afterOverride, 'afterOverride !== true');
