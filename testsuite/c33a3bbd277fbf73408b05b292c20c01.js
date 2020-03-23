load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    In a normal for statement the iteration variable is freshly allocated for each iteration. Single let binding
---*/
let a = [];
for (let i = 0; i < 5; ++i) {
  a.push(function () { return i; });
}
for (let j = 0; j < 5; ++j) {
  assert.sameValue(j, a[j]());
}
