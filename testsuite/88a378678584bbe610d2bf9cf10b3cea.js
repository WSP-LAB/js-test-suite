load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-78
description: >
    Object.defineProperty - desc.[[Set]] and name.[[Set]] are two
    objects which refer to the different objects (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

function setFunc1() { }

Object.defineProperty(obj, "foo", {
    set: setFunc1,
    configurable: true
});

function setFunc2(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", { set: setFunc2 });
verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
