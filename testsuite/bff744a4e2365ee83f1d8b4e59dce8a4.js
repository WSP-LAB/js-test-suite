load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.3
description: >
  Requires this value to have a [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.3 get %TypedArray%.prototype.byteOffset

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[ViewedArrayBuffer]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;

assert.throws(TypeError, function() {
  TypedArrayPrototype.byteOffset;
});