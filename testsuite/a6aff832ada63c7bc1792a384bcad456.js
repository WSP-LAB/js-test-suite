load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.3
description: >
    Set.prototype.constructor

    The initial value of Set.prototype.constructor is the intrinsic object %Set%.

---*/

assert.sameValue(
    Set.prototype.constructor,
    Set,
    "The value of `Set.prototype.constructor` is `Set`"
);
