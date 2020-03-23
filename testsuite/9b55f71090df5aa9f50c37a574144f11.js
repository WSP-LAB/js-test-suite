load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    property names `eval` and `arguments`
---*/
var o = {
  eval() {
    return 1;
  },
  arguments() {
    return 2;
  },
};

assert.sameValue(o.eval(), 1, "`o.eval()` returns `1`");
assert.sameValue(o.arguments(), 2, "`o.arguments()` returns `2`");
