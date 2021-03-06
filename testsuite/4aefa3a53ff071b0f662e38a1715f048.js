load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The head's bound names may include "let"
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
flags: [noStrict]
---*/

var iterCount = 0;

for (var let of [23]) {
  assert.sameValue(let, 23);
  iterCount += 1;
}

assert.sameValue(iterCount, 1);
