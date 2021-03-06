load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-45
description: >
    Object.defineProperty - 'O' is the global object that uses
    Object's [[GetOwnProperty]] method to access the 'name' property
    (8.12.9 step 1)
includes: [propertyHelper.js]
---*/

Object.defineProperty(this, "foo", {
    value: 12,
    configurable: true
});

verifyEqualTo(this, "foo", 12);

verifyNotWritable(this, "foo");

verifyNotEnumerable(this, "foo");

verifyConfigurable(this, "foo");
