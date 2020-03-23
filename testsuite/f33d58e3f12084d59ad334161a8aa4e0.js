load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-114
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    name.configurable = true and desc.configurable = false (8.12.9
    step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

function getFunc() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    get: getFunc,
    configurable: false
});
verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
