load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-240
description: >
    Object.getOwnPropertyDescriptor - ensure that 'get' property of
    returned object is data property with correct 'writable' attribute
---*/

        var obj = {};
        var fun = function () {
            return "ownGetProperty";
        };
        Object.defineProperty(obj, "property", {
            get: fun,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

            desc.get = "overwriteGetProperty";

assert.sameValue(desc.get, "overwriteGetProperty", 'desc.get');
