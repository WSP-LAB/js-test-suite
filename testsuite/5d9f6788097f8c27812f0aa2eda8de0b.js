load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    Computed property names for getters
---*/
var A = {
  get ["a"]() {
    return "A";
  }
};
assert.sameValue(A.a, "A", "The value of `A.a` is `'A'`");
