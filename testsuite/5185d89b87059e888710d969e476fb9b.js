load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-13
description: Object.freeze - 'P' is own index property of the Object
includes: [propertyHelper.js]
---*/


// default [[Configurable]] attribute value of "0": true
var obj = { 0: 0, 1: 1, length: 2};

Object.freeze(obj);

verifyNotWritable(obj, "0");
verifyNotConfigurable(obj, "0");

assert.sameValue(obj[0], 0);
