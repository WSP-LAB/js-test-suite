load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-287
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Enumerable]] attribute value of 'name' which is defined as
    non-configurable (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function setFunc(value) {
    arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
    set: setFunc,
    enumerable: false
});
try {
    Object.defineProperty(arrObj, "property", {
        enumerable: true
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyWritable(arrObj, "property", "setVerifyHelpProp");

    verifyNotEnumerable(arrObj, "property");

    verifyNotConfigurable(arrObj, "property");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
