load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-17
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 1(following 21 zeros))
---*/

        var obj = { "1e+21": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 1000000000000000000000);

assert.sameValue(desc.value, 1, 'desc.value');
