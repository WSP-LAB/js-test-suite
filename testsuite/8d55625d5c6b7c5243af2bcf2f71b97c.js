load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-137
description: >
    Object.defineProperty - 'value' property in 'Attributes' is own
    accessor property(without a get function) that overrides an
    inherited accessor property  (8.10.5 step 5.a)
---*/

        var obj = { };

        var proto = {};
        Object.defineProperty(proto, "value", {
            get: function () {
                return "inheritedAccessorProperty";
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        Object.defineProperty(child, "value", {
            set : function () { }
        });

        Object.defineProperty(obj, "property", child);

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(typeof (obj.property), "undefined", 'typeof (obj.property)');
