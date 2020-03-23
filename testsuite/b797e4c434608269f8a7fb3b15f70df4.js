load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    Arrow functions are like functions, except they throw when using the
    "new" operator on them.
---*/

assert.sameValue(typeof (() => {}), "function");
assert.sameValue(Object.getPrototypeOf(() => {}), Function.prototype);
assert.sameValue("prototype" in (() => {}), false);
