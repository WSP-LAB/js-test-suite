load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-555
description: >
    ES5 Attributes - success to update [[Configurable]] attribute of
    accessor property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
includes: [propertyHelper.js]
---*/

var obj = {};

var getFunc = function () {
    return 1001;
};

var verifySetFunc = "data";
var setFunc = function (value) {
    verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: getFunc,
    set: setFunc,
    enumerable: false,
    configurable: true
});

var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
assert.sameValue(desc1.configurable, true);

Object.defineProperty(obj, "prop", {
    configurable: false
});

verifyNotConfigurable(obj, "prop");
