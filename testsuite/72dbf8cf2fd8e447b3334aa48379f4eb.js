load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-235
description: >
    Object.defineProperty - 'set' property in 'Attributes' is present
    (8.10.5 step 8)
---*/

        var obj = {};
        var data = "data";

        Object.defineProperty(obj, "property", {
            set: function (value) {
                data = value;
            }
        });

        obj.property = "overrideData";

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(data, "overrideData", 'data');
