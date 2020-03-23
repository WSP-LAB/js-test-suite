load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-200
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' property doesn't exist in 'O', test
    [[Value]] of 'name' property of 'Attributes' is set as undefined
    if [[Value]] is absent in data descriptor 'desc' (15.4.5.1 step
    4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

Object.defineProperty(arrObj, "0", {
    writable: true,
    enumerable: true,
    configurable: false
});

verifyEqualTo(arrObj, "0", undefined);

verifyWritable(arrObj, "0");

verifyEnumerable(arrObj, "0");

verifyNotConfigurable(arrObj, "0");

