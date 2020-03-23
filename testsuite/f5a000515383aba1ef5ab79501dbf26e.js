load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.2
description: >
  The prototype of Map is the intrinsic FunctionPrototype.
info: >
  The value of the [[Prototype]] internal slot of the Map constructor is the
  intrinsic object %FunctionPrototype% (19.2.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(Map),
  Function.prototype,
  '`Object.getPrototypeOf(Map)` returns `Function.prototype`'
);
