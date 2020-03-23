load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.1.3.1
description: The `length` property of Promise Reject functions
info: >
  The length property of a promise reject function is 1.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var rejectFunction;
new Promise(function(resolve, reject) {
  rejectFunction = reject;
});

assert.sameValue(rejectFunction.length, 1);

verifyNotEnumerable(rejectFunction, "length");
verifyNotWritable(rejectFunction, "length");
verifyConfigurable(rejectFunction, "length");
