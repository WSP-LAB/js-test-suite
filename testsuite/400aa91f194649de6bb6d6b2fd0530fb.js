load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-278
description: >
    Object.defineProperty - 'name' is generic property that won't
    exist on 'O', and 'desc' is accessor descriptor, test 'name' is
    defined in 'O' with all correct attribute values (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function getFunc() {
    return 12;
}
function setFunc(value) {
    arrObj.setVerifyHelpProp = value;
}

Object.defineProperty(arrObj, "property", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
});

verifyEqualTo(arrObj, "property", getFunc());

verifyWritable(arrObj, "property", "setVerifyHelpProp");

verifyEnumerable(arrObj, "property");

verifyConfigurable(arrObj, "property");
