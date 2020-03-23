load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-229
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property, TypeError is thrown if 'P' is accessor property, and
    'desc' is data descriptor, and the [[Configurable]] attribute
    value of 'P' is false  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [];

function set_fun(value) {
    arr.setVerifyHelpProp = value;
}

Object.defineProperty(arr, "1", {
    set: set_fun,
    configurable: false

});

try {
    Object.defineProperties(arr, {
        "1": {
            value: 13
        }
    });
    $ERROR("Expected an exception.");

} catch (e) {
    verifyWritable(arr, "1", "setVerifyHelpProp");

    verifyNotEnumerable(arr, "1");

    verifyNotConfigurable(arr, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
