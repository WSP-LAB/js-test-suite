load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-28
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is an integer that
    converts to a string (value is 123)
---*/

        var obj = { "123": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 123);

assert.sameValue(desc.value, 1, 'desc.value');
