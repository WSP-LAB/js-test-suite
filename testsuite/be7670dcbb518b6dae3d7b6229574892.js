load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.11
esid: sec-number.negative_infinity
description: >
  "NEGATIVE_INFINITY" property of Number
info: >
  Number.NEGATIVE_INFINITY

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Number, "NEGATIVE_INFINITY");
verifyNotWritable(Number, "NEGATIVE_INFINITY");
verifyNotConfigurable(Number, "NEGATIVE_INFINITY");
