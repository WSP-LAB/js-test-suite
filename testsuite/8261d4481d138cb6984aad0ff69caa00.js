load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-531-6
description: >
    ES5 Attributes - Updating an indexed accessor property 'P' without
    [[Set]] using simple assignment is failed, 'A' is an Array object
    (8.12.5 step 5.b)
includes: [propertyHelper.js]
---*/

var obj = [];

var verifySetFunc = "data";
var getFunc = function () {
    return verifySetFunc;
};

Object.defineProperty(obj, "0", {
    get: getFunc,
    enumerable: true,
    configurable: true
});

verifyNotWritable(obj, "0");

assert(obj.hasOwnProperty("0"));
var desc = Object.getOwnPropertyDescriptor(obj, "0");

assert.sameValue(typeof desc.set, "undefined");

