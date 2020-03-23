load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Arrays containing different elements are not equivalent.
includes: [compareArray.js]
---*/

var first = [0, 'a', undefined];
var second = [0, 'b', undefined];

if (compareArray(first, second) !== false) {
  $ERROR('Arrays containing different elements are not equivalent.');
}
