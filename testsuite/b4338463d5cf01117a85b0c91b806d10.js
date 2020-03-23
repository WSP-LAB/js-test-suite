load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-275
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Set]] attribute value of 'P' which is defined as
    non-configurable (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arr = [];

function set_fun(value) {
    arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "property", {
    set: set_fun
});

try {
    Object.defineProperties(arr, {
        "property": {
            set: function () { }
        }
    });
} catch (e) {
    verifyWritable(arr, "property", "setVerifyHelpProp");

    verifyNotEnumerable(arr, "property");

    verifyNotConfigurable(arr, "property");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
