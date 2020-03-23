load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.6
description: >
  Fills all the elements from a with a custom start index.
info: >
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  7. If relativeStart < 0, let k be max((len + relativeStart),0); else let k be
  min(relativeStart, len).
  ...
includes: [compareArray.js]
---*/

assert(
  compareArray([0, 0, 0].fill(8, 1), [0, 8, 8]),
  'Fill elements from custom start position'
);

assert(
  compareArray([0, 0, 0].fill(8, 4), [0, 0, 0]),
  'start position is never higher than this.length'
);

assert(
  compareArray([0, 0, 0].fill(8, -1), [0, 0, 8]),
  'negative start sets initial position to max((this.length + relativeStart),0)'
);
