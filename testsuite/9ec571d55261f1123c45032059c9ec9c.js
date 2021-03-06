load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-266
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic property
    that won't exist on 'O', and 'desc' is data descriptor, test 'P'
    is defined in 'O' with all correct attribute values (15.4.5.1 step
    5)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperties(arr, {
    "property": {
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
verifyEqualTo(arr, "property", 12);

verifyWritable(arr, "property");

verifyEnumerable(arr, "property");

verifyConfigurable(arr, "property");

if (arr.length !== 0) {
    $ERROR('Expected arr.length === 0, actually ' + arr.length);
}

