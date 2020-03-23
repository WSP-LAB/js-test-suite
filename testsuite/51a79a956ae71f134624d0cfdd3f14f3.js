load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    global and block scope let
---*/
let x;
let y = 2;

// Block local
{
  let y;
  let x = 3;
}

assert.sameValue(x, undefined);
assert.sameValue(y, 2);

if (true) {
  let y;
  assert.sameValue(y, undefined);
}

