load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-209
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' makes no change if the value of every field in
    'desc' is the same value as the corresponding field in 'P'(desc is
    accessor property)  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];
var get_func = function () {
    return "100";
};
var set_func = function (value) {
    arr.setVerifyHelpProp = value;
};

var descObj = {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
};

var properties = {
    "0": descObj
};

Object.defineProperty(arr, "0", descObj);

Object.defineProperties(arr, properties);

verifyEqualTo(arr, "0", get_func());

verifyWritable(arr, "0", "setVerifyHelpProp");

verifyEnumerable(arr, "0");

verifyConfigurable(arr, "0");
