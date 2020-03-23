load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-233
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Set]] field of 'desc' and the [[Set]] attribute
    value of 'name' are two objects which refer to the different
    objects (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

function setFunc1() { }

Object.defineProperty(arrObj, "0", {
    set: setFunc1,
    configurable: true
});

function setFunc2(value) {
    arrObj.setVerifyHelpProp = value;
}

Object.defineProperty(arrObj, "0", { set: setFunc2 });
verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyNotEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
