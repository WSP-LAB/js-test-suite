load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-221-1
description: >
    Object.defineProperty - 'Attributes' is a Boolean object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
---*/

        var obj = {};

            Boolean.prototype.get = function () {
                return "booleanGetProperty";
            };
            var boolObj = new Boolean(true);

            Object.defineProperty(obj, "property", boolObj);

assert.sameValue(obj.property, "booleanGetProperty", 'obj.property');
