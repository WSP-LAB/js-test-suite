load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-108
description: >
    Object.defineProperty - 'name' and 'desc' are accessor
    properties,  name.[[Get]] is present and desc.[[Get]] is undefined
    (8.12.9 step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return 10;
}

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    set: setFunc,
    get: undefined
});
verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
