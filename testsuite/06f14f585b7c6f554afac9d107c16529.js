load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-209
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'desc' is accessor descriptor, test updating all
    attribute values of 'name' (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];
var setFunc = function (value) {
    arrObj.setVerifyHelpProp = value;
};
var getFunc = function () {
    return 14;
};

Object.defineProperty(arrObj, "0", {
    get: function () {
        return 11;
    },
    set: function () { },
    configurable: true,
    enumerable: true
});

Object.defineProperty(arrObj, "0", {
    get: getFunc,
    set: setFunc,
    configurable: false,
    enumerable: false
});

verifyEqualTo(arrObj, "0", getFunc());

verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyNotEnumerable(arrObj, "0");

verifyNotConfigurable(arrObj, "0");
