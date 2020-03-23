load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-249
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property that already exists on 'O' is data property and
    'desc' is data descriptor, test setting the [[Value]] attribute
    value of 'P' from undefined to normal value  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [undefined];

Object.defineProperties(arr, {
    "0": {
        value: 12
    }
});
verifyEqualTo(arr, "0", 12);

verifyWritable(arr, "0");

verifyEnumerable(arr, "0");

verifyConfigurable(arr, "0");

