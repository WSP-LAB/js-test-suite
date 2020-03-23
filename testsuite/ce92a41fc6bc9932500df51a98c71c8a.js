load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-47
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O',
    [[Value]] of 'name' property is set as undefined if it is absent
    in data descriptor 'desc' (8.12.9 step 4.a.i)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
    writable: true,
    enumerable: true,
    configurable: false
});

verifyEqualTo(obj, "property", undefined);

verifyWritable(obj, "property");

verifyEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");

