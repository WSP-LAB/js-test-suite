load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-434
description: >
    ES5 Attributes - property ([[Get]] is undefined, [[Set]] is
    undefined, [[Enumerable]] is true, [[Configurable]] is false) is
    undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
    get: undefined,
    set: undefined,
    enumerable: true,
    configurable: false
});

assert(obj.hasOwnProperty("prop"));

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

assert.sameValue(desc.configurable, false);

verifyNotConfigurable(obj, "prop");
