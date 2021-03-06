load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.1.2.1
description: >
  The `length` parameter can be zero.
info: >
  ArrayBuffer( length )

  ...
  2. Let numberLength be ToNumber(length).
  3. Let byteLength be ToLength(numberLength).
  4. ReturnIfAbrupt(byteLength).
  5. If SameValueZero(numberLength, byteLength) is false, throw a RangeError exception.
  ...
---*/

var positiveZero = new ArrayBuffer(+0);
assert.sameValue(positiveZero.byteLength, 0);

var negativeZero = new ArrayBuffer(-0);
assert.sameValue(negativeZero.byteLength, 0);
