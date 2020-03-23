load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-231
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Get]] field of 'desc' and the [[Get]] attribute
    value of 'name' are two objects which refer to the different
    objects (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];
arrObj.helpVerifySet = 10;

function getFunc1() {
    return 20;
}
function getFunc2() {
    return arrObj.helpVerifySet;
}
function setFunc(value) {
    arrObj.helpVerifySet = value;
}

Object.defineProperty(arrObj, "0", {
    get: getFunc1,
    set: setFunc,
    configurable: true
});

Object.defineProperty(arrObj, "0", {
    get: getFunc2
});

verifyEqualTo(arrObj, "0", getFunc2());

verifyWritable(arrObj, "0", "helpVerifySet");

verifyNotEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
