load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.4
esid: sec-number.isnan
description: >
  Return false if argument is not NaN
info: |
  Number.isNaN ( number )

  1. If Type(number) is not Number, return false.
  2. If number is NaN, return true.
  3. Otherwise, return false. 
---*/

assert.sameValue(Number.isNaN(0), false, "0");
assert.sameValue(Number.isNaN(-0), false, "-0");
assert.sameValue(Number.isNaN(1), false, "1");
assert.sameValue(Number.isNaN(-1), false, "-1");
assert.sameValue(Number.isNaN(1.1), false, "1.1");
assert.sameValue(Number.isNaN(1e10), false, "1e10");
assert.sameValue(Number.isNaN(Infinity), false, "Infinity");
assert.sameValue(Number.isNaN(-Infinity), false, "-Infinity");
