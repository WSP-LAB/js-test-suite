load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isfinite-number
es6id: 18.2.2
description: >
  Return false if number is NaN, Infinity or -Infinity
info: |
  isFinite (number)

  1. Let num be ? ToNumber(number).
  2. If num is NaN, +∞, or -∞, return false.
---*/

assert.sameValue(isFinite(NaN), false, "NaN");
assert.sameValue(isFinite(Infinity), false, "Infinity");
assert.sameValue(isFinite(-Infinity), false, "-Infinity");
