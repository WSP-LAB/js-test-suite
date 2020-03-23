load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.5
description: >
  Throws a TypeError if first argument is not callable.
info: >
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  4. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
features: [Symbol]
---*/

var map = new Map();

assert.throws(TypeError, function() {
  map.forEach({});
});

assert.throws(TypeError, function() {
  map.forEach([]);
});

assert.throws(TypeError, function() {
  map.forEach(1);
});

assert.throws(TypeError, function() {
  map.forEach('');
});

assert.throws(TypeError, function() {
  map.forEach(null);
});

assert.throws(TypeError, function() {
  map.forEach(undefined);
});

assert.throws(TypeError, function() {
  map.forEach(Symbol());
});
