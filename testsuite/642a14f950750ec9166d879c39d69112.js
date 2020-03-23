load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.11
description: >
  Throws a TypeError if target is not an Object.
info: >
  26.1.11 Reflect.ownKeys ( target )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
---*/

assert.throws(TypeError, function() {
  Reflect.ownKeys(1);
});

assert.throws(TypeError, function() {
  Reflect.ownKeys(null);
});

assert.throws(TypeError, function() {
  Reflect.ownKeys(undefined);
});

assert.throws(TypeError, function() {
  Reflect.ownKeys('');
});
