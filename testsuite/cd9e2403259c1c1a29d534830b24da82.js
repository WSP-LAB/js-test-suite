load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-dataview.prototype.bytelength
es6id: 24.2.4.2
description: Throws a TypeError exception when invoked as a function
info: |
  24.2.4.2 get DataView.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[DataView]] internal slot, throw a TypeError
  exception.
  ...
---*/

var getter = Object.getOwnPropertyDescriptor(
  DataView.prototype, 'byteLength'
).get;

assert.throws(TypeError, function() {
  getter();
});
