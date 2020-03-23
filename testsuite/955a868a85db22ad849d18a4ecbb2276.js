load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-205
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' property doesn't exist in 'O' and [[Get]]
    is absent in accessor descriptor 'desc', test [[Get]] attribute of
    property 'name' is set to undefined (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];
var setFunc = function (value) {
    arrObj.setVerifyHelpProp = value;
};

Object.defineProperty(arrObj, "0", {
    set: setFunc,
    enumerable: true,
    configurable: true
});

verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
