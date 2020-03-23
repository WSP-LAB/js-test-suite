load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.1
description: >
    Rest parameter produces an instance of Array
---*/
function af(...a) {
  assert.sameValue(a.constructor, Array, "The value of `a.constructor` is `Array`");
  assert(Array.isArray(a), "`Array.isArray(a)` returns `true`");
}
af(1);
