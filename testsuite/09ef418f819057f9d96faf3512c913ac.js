load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-c-1
description: >
    Object.freeze - The [[Configurable]] attribute of own data
    property of 'O' is set to false while other attributes are
    unchanged
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "foo", {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: true
});

Object.freeze(obj);

var desc = Object.getOwnPropertyDescriptor(obj, "foo");

if (desc.configurable !== false) {
    $ERROR("Expected desc.configurable to be false, actually " + desc.configurable);
}
if (desc.writable !== false) {
    $ERROR("Expected desc.writable to be false, actually " + desc.writable);
}

verifyEqualTo(obj, "foo", 10);

verifyNotWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");

