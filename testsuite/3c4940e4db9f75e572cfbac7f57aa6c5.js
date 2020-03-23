load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-37
description: >
    Object.defineProperties - 'desc' is accessor descriptor, test
    setting all attribute values of 'P' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/

var obj = {};
var getFun = function () {
    return 10;
};
var setFun = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperties(obj, {
    prop: {
        get: getFun,
        set: setFun,
        enumerable: false,
        configurable: false
    }
});
verifyEqualTo(obj, "prop", getFun());

verifyWritable(obj, "prop", "setVerifyHelpProp");

verifyNotEnumerable(obj, "prop");

verifyNotConfigurable(obj, "prop");

