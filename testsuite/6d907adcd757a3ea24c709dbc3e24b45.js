load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-4
description: Object.seal - non-enumerable own property of 'O' is sealed
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "foo", {
    value: 10,
    enumerable: false,
    configurable: true
});

assert(Object.isExtensible(obj));
Object.seal(obj);

assert(obj.hasOwnProperty("foo"));
verifyNotConfigurable(obj, "foo");

