load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-53
description: >
    Object.create - 'enumerable' property of one property in
    'Properties' is an inherited accessor property (8.10.5 step 3.a)
---*/

        var proto = {};
        var accessed = false;

        Object.defineProperty(proto, "enumerable", {
            get: function () {
                return true;
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        var newObj = Object.create({}, {
            prop: descObj
        });

        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }

assert(accessed, 'accessed !== true');
