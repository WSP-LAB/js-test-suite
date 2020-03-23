load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-115
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    several attributes values of 'name' and 'desc' are different
    (8.12.9 step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc1() {
    return 10;
}
function setFunc1() {}

Object.defineProperty(obj, "foo", {
    get: getFunc1,
    set: setFunc1,
    enumerable: true,
    configurable: true
});

function getFunc2() {
    return 20;
}
function setFunc2(value) {
    obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
    get: getFunc2,
    set: setFunc2,
    enumerable: false
});
verifyEqualTo(obj, "foo", getFunc2());

verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
