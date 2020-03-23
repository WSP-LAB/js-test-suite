load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-3-9
description: >
    Object.getOwnPropertyDescriptor - 'P' is own accessor property
    without a get function
---*/

        var obj = {};
        var fun = function () { };
        Object.defineProperty(obj, "property", {
            set: fun,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

assert.sameValue(desc.set, fun, 'desc.set');
