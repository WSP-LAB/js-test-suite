load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-204
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'desc' is data descriptor, test updating all
    attribute values of 'name' (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [1]; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperty(arrObj, "0", {
    value: 1001,
    writable: false,
    enumerable: false,
    configurable: false
});

verifyEqualTo(arrObj, "0", 1001);

verifyNotWritable(arrObj, "0");

verifyNotEnumerable(arrObj, "0");

verifyNotConfigurable(arrObj, "0");

