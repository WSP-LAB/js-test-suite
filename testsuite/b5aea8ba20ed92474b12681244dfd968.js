load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.1.4.3
description: >
  Throws a TypeError if `this` is not an Object.
info: >
  ArrayBuffer.prototype.slice ( start, end )

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  ...
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call(undefined);
}, "`this` value is undefined");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call(null);
}, "`this` value is null");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call(true);
}, "`this` value is Boolean");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call("");
}, "`this` value is String");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call(Symbol());
}, "`this` value is Symbol");

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.slice.call(1);
}, "`this` value is Number");