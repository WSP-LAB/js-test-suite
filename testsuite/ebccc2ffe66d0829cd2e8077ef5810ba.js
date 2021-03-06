load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.2
esid: sec-number.prototype.toexponential
description: >
  Return signed Infinity string if this is Infinity
info: |
  Number.prototype.toExponential ( fractionDigits )

  1. Let x be ? thisNumberValue(this value).
  [...]
  5. Let s be the empty String.
  6. If x < 0, then
    a. Let s be "-".
    b. Let x be -x.
  7. If x = +∞, then
    a. Return the concatenation of the Strings s and "Infinity".
  [...]
---*/

assert.sameValue((+Infinity).toExponential(1000), "Infinity", "Infinity value");
var n = new Number(+Infinity);
assert.sameValue(n.toExponential(1000), "Infinity", "Number Infinity");

assert.sameValue((-Infinity).toExponential(1000), "-Infinity", "-Infinity value");
var n = new Number(-Infinity);
assert.sameValue(n.toExponential(1000), "-Infinity", "Number -Infinity");
