load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    Syntax variations of valid Arrow Functions
---*/

assert.sameValue((() => 1)(), 1);
assert.sameValue((a => a + 1)(1), 2);
assert.sameValue((() => { return 3; })(), 3);
assert.sameValue((a => { return a + 3; })(1), 4);
assert.sameValue(((a, b) => a + b)(1, 4), 5);
assert.sameValue(((a, b) => { return a + b; })(1, 5), 6);
