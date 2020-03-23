load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.2
esid: sec-number.prototype.toexponential
description: >
  Return abrupt completion from ToInteger(symbol fractionDigits)
info: |
  Number.prototype.toExponential ( fractionDigits )

  1. Let x be ? thisNumberValue(this value).
  2. Let f be ? ToInteger(fractionDigits).
  [...]
features: [Symbol]
---*/

var fd = Symbol("1");

assert.throws(TypeError, function() {
  NaN.toExponential(fd);
});
