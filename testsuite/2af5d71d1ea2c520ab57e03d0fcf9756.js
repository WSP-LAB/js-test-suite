load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: |
  Throws a TypeError exception when `this` is not a TypedArray instance
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  1. Let O be the this value.
  2. Perform ? ValidateTypedArray(O).
  ...

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  1. If Type(O) is not Object, throw a TypeError exception.
  2. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
---*/

var map = TypedArray.prototype.map;
var callbackfn = function() {};

assert.throws(TypeError, function() {
  map.call({}, callbackfn);
}, "this is an Object");

assert.throws(TypeError, function() {
  map.call([], callbackfn);
}, "this is an Array");

var ab = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  map.call(ab, callbackfn);
}, "this is an ArrayBuffer instance");

var dv = new DataView(new ArrayBuffer(8), 0, 1);
assert.throws(TypeError, function() {
  map.call(dv, callbackfn);
}, "this is a DataView instance");
