load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The right-hand side of a `yield *` expression may appear on a new line.
  es6id: 14.4
 ---*/

var result;
var g = function*() {
  yield *
  g2();
};
var g2 = function*() {};

result = g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
