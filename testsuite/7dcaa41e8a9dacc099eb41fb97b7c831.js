load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  If `end` is undefined, set final position to `this.length`.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  ...
  11. If end is undefined, let relativeEnd be len; else let relativeEnd be
  ToInteger(end).
  ...
includes: [compareArray.js]
---*/

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(0, 1, undefined),
    [1, 2, 3, 3]
  ),
  '[0, 1, 2, 3].copyWithin(0, 1, undefined) -> [1, 2, 3]'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(0, 1),
    [1, 2, 3, 3]
  ),
  '[0, 1, 2, 3].copyWithin(0, 1) -> [1, 2, 3, 3]'
);
