load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-90
description: >
    Object.defineProperty will not throw TypeError when
    name.configurable = false, name.writable = false, desc.value and
    name.value are two strings with the same value (8.12.9 step
    10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
    value: "abcd",
    writable: false,
    configurable: false 
});

Object.defineProperty(obj, "foo", { value: "abcd" });
verifyEqualTo(obj, "foo", "abcd");

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
