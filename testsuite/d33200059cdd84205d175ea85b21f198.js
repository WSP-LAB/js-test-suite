load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Math.E is a numeric value
esid: sec-math.e
es6id: 20.2.1.1
info: >
    The Number value for e, the base of the natural logarithms, which is
    approximately 2.7182818284590452354.

    The precision of this approximation is host-defined.
---*/

assert.sameValue(typeof Math.E, 'number');
assert.notSameValue(Math.E, NaN);
