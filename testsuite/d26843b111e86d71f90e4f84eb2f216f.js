load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object.prototype.__proto__
description: Called on an immutable prototype exotic object
info: >
    [...]
    4. Let status be ? O.[[SetPrototypeOf]](proto).
    5. If status is false, throw a TypeError exception.
---*/

Object.prototype.__proto__ = null;

assert.throws(TypeError, function() {
  Object.prototype.__proto__ = {};
});

assert.sameValue(Object.getPrototypeOf(Object.prototype), null);
