load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.5
esid: sec-number.prototype.toprecision
description: >
  Return "0" if this value is 0 and precision is 1
info: |
  Number.prototype.toPrecision ( precision )

  1. Let x be ? thisNumberValue(this value).
  [...]
  5. Let s be the empty String.
  [...]
  9. If x = 0, then
    a. Let m be the String consisting of p occurrences of the code unit 0x0030
    (DIGIT ZERO).
    b. Let e be 0.
  [...]
  11. If e = p-1, return the concatenation of the Strings s and m.
---*/

assert.sameValue(Number.prototype.toPrecision(1), "0", "Number.prototype is 0");

assert.sameValue((-0).toPrecision(1), "0", "-0");