load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.4
description: Behavior when `this` value is a Symbol
info: >
    1. Let s be the this value.
    2. If Type(s) is Symbol, return s.
features: [Symbol.toPrimitive]
---*/

assert.sameValue(Symbol.toPrimitive[Symbol.toPrimitive](), Symbol.toPrimitive);
