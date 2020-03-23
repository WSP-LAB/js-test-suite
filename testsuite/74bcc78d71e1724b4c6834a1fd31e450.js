load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.1
description: >
    Set.prototype.add ( value )

    1. Let S be this value.
    ...
    8. Return S.

---*/

var s = new Set();

assert.sameValue(s.add(1), s, "`s.add(1)` returns `s`");
