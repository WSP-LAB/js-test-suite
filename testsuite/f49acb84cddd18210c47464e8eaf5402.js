load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-207
description: >
    Object.defineProperties - 'descObj' is a Boolean object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
---*/

        var obj = {};

        var descObj = new Boolean(false);

        descObj.get = function () {
            return "Boolean";
        };

        Object.defineProperties(obj, {
            property: descObj
        });

assert.sameValue(obj.property, "Boolean", 'obj.property');
