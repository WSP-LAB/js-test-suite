load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Math.SQRT1_2 is a numeric value
esid: sec-math.sqrt1_2
es6id: 20.2.1.7
info: >
    The Number value for the square root of `1/2`, which is approximately
    0.7071067811865476.

    The precision of this approximation is host-defined.
---*/

assert.sameValue(typeof Math.SQRT1_2, 'number');
assert.notSameValue(Math.SQRT1_2, NaN);
