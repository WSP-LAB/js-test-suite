load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview-constructor
es6id: 24.2.2
description: >
  The length property of DataView is 3
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.length, 3, "The value of `DataView.length` is `3`");

verifyNotEnumerable(DataView, "length");
verifyNotWritable(DataView, "length");
verifyConfigurable(DataView, "length");
