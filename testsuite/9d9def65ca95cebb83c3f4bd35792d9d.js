load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-268
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic own
    accessor property of 'O', and 'desc' is accessor descriptor, test
    updating multiple attribute values of 'P' (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/

var arr = [];
function get_fun() {
    return 12;
}
function set_fun(value) {
    arr.verifySetFun = value;
}
Object.defineProperty(arr, "property", {
    get: function () {
        return 36;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperties(arr, {
    "property": {
        get: get_fun,
        set: set_fun,
        enumerable: false
    }
});
verifyEqualTo(arr, "property", get_fun());

verifyWritable(arr, "property", "verifySetFun");

verifyNotEnumerable(arr, "property");

verifyConfigurable(arr, "property");
