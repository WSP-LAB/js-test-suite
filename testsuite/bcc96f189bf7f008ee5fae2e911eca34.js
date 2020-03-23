load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-82-1
description: >
    Object.defineProperty - Update [[Enumerable]] attribute of 'name'
    property to false successfully when [[Enumerable]] and
    [[Configurable]] attributes of 'name' property are true,  the
    'desc' is a generic descriptor which only contains [[Enumerable]]
    attribute as false, 'name' property is a data property (8.12.9
    step 8)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
    value: 1001,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    enumerable: false
});

verifyEqualTo(obj, "foo", 1001);

verifyWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");