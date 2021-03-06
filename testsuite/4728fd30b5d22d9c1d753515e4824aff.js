load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.4
description: >
  Return false when value is not present in the WeakSet entries.
info: >
  WeakSet.prototype.has ( value )

  ...
  7. Return false.

---*/

var foo = {};
var bar = {};
var s = new WeakSet();

assert.sameValue(s.has(foo), false);

s.add(foo);
assert.sameValue(s.has(bar), false);

s.delete(foo);
assert.sameValue(s.has(foo), false);
