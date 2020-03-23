load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-277
description: >
    Object.defineProperty -  'O' is an Array, 'name' is generic
    property that won't exist on 'O', and 'desc' is data descriptor,
    test 'name' is defined in 'O' with all correct attribute values
    (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

Object.defineProperty(arrObj, "property", {
    value: 12,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyEqualTo(arrObj, "property", 12);

verifyWritable(arrObj, "property");

verifyEnumerable(arrObj, "property");

verifyConfigurable(arrObj, "property");

