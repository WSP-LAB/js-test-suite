load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.2
description: >
  Return false if entry is not in the WeakMap.
info: >
  WeakMap.prototype.delete ( value )

  ...
  7. Return false.

---*/

var map = new WeakMap();
var foo = {};
var bar = {};

map.set(foo, 42);

assert.sameValue(map.delete(bar), false);
