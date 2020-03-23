load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-242
description: >
    Object.defineProperty - 'set' property in 'Attributes' is an
    inherited accessor property (8.10.5 step 8.a)
---*/

        var obj = {};
        var proto = {};
        var data = "data";
        Object.defineProperty(proto, "set", {
            get: function () {
                return function (value) {
                    data = value;
                };
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(obj, "property", child);
        obj.property = "inheritedAccessorProperty";

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(data, "inheritedAccessorProperty", 'data');
