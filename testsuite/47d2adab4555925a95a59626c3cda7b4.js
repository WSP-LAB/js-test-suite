load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property method names can be a number
includes: [compareArray.js]
---*/

function ID(x) {
  return x;
}

var object = {
  a() { return 'A'; },
  [1]() { return 'B'; },
  c() { return 'C'; },
  [ID(2)]() { return 'D'; },
};
assert.sameValue(object.a(), 'A', "`object.a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(object[1](), 'B', "`object[1]()` returns `'B'`. Defined as `[1]() { return 'B'; }`");
assert.sameValue(object.c(), 'C', "`object.c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(object[2](), 'D', "`object[2]()` returns `'D'`. Defined as `[ID(2)]() { return 'D'; }`");
assert(
  compareArray(Object.keys(object), ['1', '2', 'a', 'c']),
  "`compareArray(Object.keys(object), ['1', '2', 'a', 'c'])` returns `true`"
);
