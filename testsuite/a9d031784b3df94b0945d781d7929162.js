load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-242
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property,  'name' is data property and 'desc' is accessor
    descriptor, and the [[Configurable]] attribute value of 'name' is
    true, test 'name' is converted from data property to accessor
    property (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [3];

function setFunc(value) {
    arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "0", {
    set: setFunc
});

verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
