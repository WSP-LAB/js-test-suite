load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-b-i-1
description: >
    Object.freeze - The [[Wrtiable]] attribute of own data property of
    'O' is set to false while other attributes are unchanged
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "foo", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: false
});

Object.freeze(obj);
var desc = Object.getOwnPropertyDescriptor(obj, "foo");

verifyEqualTo(obj, "foo", 10);

verifyNotWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");

if (desc.writable !== false) {
    $ERROR('Expected desc.writable === false, actually ' + desc.writable);
}

if (desc.configurable !== false) {
    $ERROR('Expected desc.configurable === false, actually ' + desc.configurable);
}

