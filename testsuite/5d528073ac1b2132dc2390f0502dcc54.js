load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-114
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is absent, test
    every field in 'desc' is absent (15.4.5.1 step 3.a.i)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperties(arr, { length: {} });

if (arr.length !== 0) {
    $ERROR("Expected arr.length to be 0, actually " + arr.length);
}

arr.length = 2;

verifyEqualTo(arr, "length", 2);

verifyWritable(arr, "length", "length", 5);

verifyNotEnumerable(arr, "length");

verifyNotConfigurable(arr, "length");
