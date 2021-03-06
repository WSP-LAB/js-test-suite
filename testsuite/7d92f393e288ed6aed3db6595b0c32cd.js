load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.2
esid: sec-number.isfinite
description: >
  Return false if argument is not Number
info: |
  Number.isFinite ( number )

  1. If Type(number) is not Number, return false.
  [...]
features: [Symbol]
---*/

assert.sameValue(Number.isFinite("1"), false, "string");
assert.sameValue(Number.isFinite([1]), false, "[1]");
assert.sameValue(Number.isFinite(new Number(42)), false, "Number object");
assert.sameValue(Number.isFinite(false), false, "false");
assert.sameValue(Number.isFinite(true), false, "true");
assert.sameValue(Number.isFinite(undefined), false, "undefined");
assert.sameValue(Number.isFinite(null), false, "null");
assert.sameValue(Number.isFinite(Symbol("1")), false, "symbol");
assert.sameValue(Number.isFinite(), false, "no arg");
