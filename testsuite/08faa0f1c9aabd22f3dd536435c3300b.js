load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-38-1
description: >
    Object.defineProperties - 'P' exists in 'O' is an accessor
    property, test 'P' makes no change if 'desc' is generic descriptor
    without any attribute (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};
var getFunc = function () {
    return 12;
};
Object.defineProperties(obj, {
    foo: {
        get: getFunc,
        enumerable: true,
        configurable: true
    }
});

Object.defineProperties(obj, { foo: {} });

verifyEqualTo(obj, "foo", getFunc());

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
