load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype
es6id: 24.2.3.1
description: >
  The initial value of DataView.prototype is the DataView prototype object.
info: >
  The initial value of DataView.prototype is the intrinsic object
  %DataViewPrototype%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(DataView, "prototype");
verifyNotWritable(DataView, "prototype");
verifyNotConfigurable(DataView, "prototype");
