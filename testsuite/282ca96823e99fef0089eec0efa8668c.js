load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
  Throws a TypeError exception if predicate is not callable.
info: >
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  5. If IsCallable(predicate) is false, throw a TypeError exception.
  ...
---*/

assert.throws(TypeError, function() {
  [].findIndex({});
});

assert.throws(TypeError, function() {
  [].findIndex(null);
});

assert.throws(TypeError, function() {
  [].findIndex(undefined);
});

assert.throws(TypeError, function() {
  [].findIndex(true);
});

assert.throws(TypeError, function() {
  [].findIndex(1);
});

assert.throws(TypeError, function() {
  [].findIndex('');
});

assert.throws(TypeError, function() {
  [].findIndex(1);
});

assert.throws(TypeError, function() {
  [].findIndex([]);
});

assert.throws(TypeError, function() {
  [].findIndex(/./);
});
