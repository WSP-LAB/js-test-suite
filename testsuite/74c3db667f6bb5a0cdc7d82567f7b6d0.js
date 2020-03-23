load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.1
description: Returns `this` after adding a new value.
info: >
  WeakSet.prototype.add ( value )

  1. Let S be this value.
  ...
  8. Return S.

---*/

var s = new WeakSet();

assert.sameValue(s.add({}), s, '`s.add({})` returns `s`');
