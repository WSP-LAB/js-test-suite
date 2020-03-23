load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.12.3
description: >
    "Logical AND" Symbol evaluation
---*/
var sym = Symbol();

assert.sameValue(sym && true, true, "`sym && true` is `true`");
assert.sameValue(!sym && false, false, "`!sym && false` is `false`");
