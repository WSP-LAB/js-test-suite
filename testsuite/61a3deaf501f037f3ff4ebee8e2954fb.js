load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-96
description: >
    Object.defineProperties - value of 'configurable' property of
    'descObj' is non-empty string (8.10.5 step 4.b)
---*/

        var obj = {};

        Object.defineProperties(obj, {
            property: {
                configurable: "abc"
            }
        });

        var hadOwnProperty = obj.hasOwnProperty("property");

        delete obj.property;

assert.sameValue(obj.hasOwnProperty("property"), false, 'obj.hasOwnProperty("property")');
assert(hadOwnProperty, 'hadOwnProperty !== true');