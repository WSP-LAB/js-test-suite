load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    outer const binding unchanged by for-loop const binding
---*/
//

const x = "outer_x";
const y = "outer_y";
var i = 0;

for (const x = "inner_x"; i < 1; i++) {
  const y = "inner_y";

  assert.sameValue(x, "inner_x");
  assert.sameValue(y, "inner_y");
}
assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");

