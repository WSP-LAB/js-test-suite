load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13
description: >
    let ForDeclaration: creates a fresh binding per iteration
---*/

let z = 1;
let s = 0;
for (let x = 1; z < 2; z++) {
  s += x + z;
}
assert.sameValue(s, 2, "The value of `s` is `2`");
