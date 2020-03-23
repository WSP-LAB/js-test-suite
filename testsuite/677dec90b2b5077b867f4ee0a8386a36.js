load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    hoisting var declarations out of blocks
---*/
function fn() {
  {
    var x = 1;
    var y;
  }
  assert.sameValue(x, 1);
  assert.sameValue(y, undefined);
}
fn();

