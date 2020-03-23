load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-386
description: >
    ES5 Attributes - [[Value]] attribute of data property is an Array
    object
---*/

        var obj = {};
        var arrObj = [];

        Object.defineProperty(obj, "prop", {
            value: arrObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

assert.sameValue(obj.prop, arrObj, 'obj.prop');
assert.sameValue(desc.value, arrObj, 'desc.value');
