load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-206
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' makes no change if every field in 'desc' is
    absent (name is data property)  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

arr[0] = 101; // default value of attributes: writable: true, configurable: true, enumerable: true


Object.defineProperties(arr, {
    "0": {}
});
verifyEqualTo(arr, "0", 101);

verifyWritable(arr, "0");

verifyEnumerable(arr, "0");

verifyConfigurable(arr, "0");
