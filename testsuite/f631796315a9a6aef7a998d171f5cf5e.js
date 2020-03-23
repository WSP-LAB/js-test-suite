load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-470
description: >
    ES5 Attributes - property ([[Get]] is undefined, [[Set]] is a
    Function, [[Enumerable]] is true, [[Configurable]] is false) is
    undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

var verifySetFunc = "data";
var setFunc = function (value) {
    verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: undefined,
    set: setFunc,
    enumerable: true,
    configurable: false
});

assert(obj.hasOwnProperty("prop"));

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

verifyNotWritable(obj, "prop");
verifyNotConfigurable(obj, "prop");

assert.sameValue(desc.configurable, false);

assert(obj.hasOwnProperty("prop"));
