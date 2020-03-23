load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-20
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 0.000001)
---*/

        var obj = {};
        Object.defineProperty(obj, 0.000001, {});

assert(obj.hasOwnProperty("0.000001"), 'obj.hasOwnProperty("0.000001") !== true');
