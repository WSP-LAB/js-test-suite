load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-2-1
description: >
    Object.getOwnPropertyNames - returned array is an array according
    to Array.isArray
---*/

        var obj = {};
        var result = Object.getOwnPropertyNames(obj);

assert(Array.isArray(result), 'Array.isArray(result) !== true');
