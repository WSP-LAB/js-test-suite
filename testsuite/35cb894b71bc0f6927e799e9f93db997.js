load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Throw a TypeError exception if directly invoked.
info: >
  22.2.1.1 %TypedArray% ( )

  1. Throw a TypeError Exception
  ...

  Note: ES2016 replaces all the references for the %TypedArray% constructor to a
  single chapter covering all arguments cases.
includes: [testTypedArray.js]
---*/

assert.throws(TypeError, function() {
  TypedArray();
});

assert.throws(TypeError, function() {
  new TypedArray();
});

assert.throws(TypeError, function() {
  TypedArray(1);
});

assert.throws(TypeError, function() {
  new TypedArray(1);
});

assert.throws(TypeError, function() {
  TypedArray(1.1);
});

assert.throws(TypeError, function() {
  new TypedArray(1.1);
});

assert.throws(TypeError, function() {
  TypedArray({});
});

assert.throws(TypeError, function() {
  new TypedArray({});
});

var typedArray = new Int8Array(4);
assert.throws(TypeError, function() {
  TypedArray(typedArray);
});

assert.throws(TypeError, function() {
  new TypedArray(typedArray);
});

var buffer = new ArrayBuffer(4);
assert.throws(TypeError, function() {
  TypedArray(buffer);
});

assert.throws(TypeError, function() {
  new TypedArray(buffer);
});
