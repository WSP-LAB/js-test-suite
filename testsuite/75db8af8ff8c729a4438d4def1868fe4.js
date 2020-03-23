load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-10
description: >
    Object.freeze - 'P' is own named property of an Array object that
    uses Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var arrObj = [];

arrObj.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(arrObj);

verifyNotWritable(arrObj, "foo");
verifyNotConfigurable(arrObj, "foo");

assert.sameValue(arrObj.foo, 10);
