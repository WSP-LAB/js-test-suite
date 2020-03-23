load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.15
esid: sec-number.prototype
description: >
  "prototype" property of Number
info: >
  Number.prototype

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Number, "prototype");
verifyNotWritable(Number, "prototype");
verifyNotConfigurable(Number, "prototype");
