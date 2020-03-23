load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isfinite-number
es6id: 18.2.2
description: >
  Throws a TypeError if number is a Symbol
info: |
  isFinite (number)

  1. Let num be ? ToNumber(number).
features: [Symbol]
---*/

var s = Symbol(1);

assert.throws(TypeError, function() {
  isFinite(s);
});