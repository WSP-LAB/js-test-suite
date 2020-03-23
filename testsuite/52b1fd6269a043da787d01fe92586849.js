load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-11
description: >
    Object.freeze - 'P' is own index property of the Arguments object
    that implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/


// default [[Configurable]] attribute value of "0": true
var argObj = (function () { return arguments; }(1, 2, 3));

Object.freeze(argObj);

var desc = Object.getOwnPropertyDescriptor(argObj, "0");

verifyNotWritable(argObj, "0");
verifyNotConfigurable(argObj, "0");
assert.sameValue(argObj[0], 1);

