load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-47
description: >
    Object.defineProperties - desc.value and P.value are two numbers
    with the same value (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

var desc = { value: 101 };
Object.defineProperty(obj, "foo", desc);

Object.defineProperties(obj, {
    foo: {
        value: 101
    }
});
verifyEqualTo(obj, "foo", 101);

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
