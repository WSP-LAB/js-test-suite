load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.3
description: >
  Return false if entry wasn't in the WeakSet.
info: >
  WeakSet.prototype.delete ( value )

  ...
  7. Return false.

---*/

var s = new WeakSet();

assert.sameValue(s.delete({}), false);
