load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-9
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    inherited data property (8.10.5 step 3.a)
---*/

        var obj = {};
        var accessed = false;

        var proto = {
            enumerable: true
        };
        var Con = function () { };
        Con.prototype = proto;
        var descObj = new Con();

        Object.defineProperties(obj, {
            prop: descObj
        });

        for (var property in obj) {
            if (property === "prop") {
                accessed = true;
            }
        }

assert(accessed, 'accessed !== true');
