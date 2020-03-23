load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.prototype.hasOwnProperty called with symbol property key
info: >
  19.1.3.2 Object.prototype.hasOwnProperty ( V )

  1. Let P be ToPropertyKey(V).
  2. ReturnIfAbrupt(P).
  ...
es6id: 19.1.3.2
---*/

var obj = {};
var sym = Symbol();

assert.sameValue(
  obj.hasOwnProperty(sym),
  false,
  "Returns false if symbol own property not found"
);

obj[sym] = 0;

assert.sameValue(
  obj.hasOwnProperty(sym),
  true,
  "Returns true if symbol own property found"
);
