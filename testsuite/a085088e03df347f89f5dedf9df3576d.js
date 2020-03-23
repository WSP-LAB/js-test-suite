load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.2
description: >
  The initial value of WeakSet.prototype.constructor is the %WeakSet%
  intrinsic object.
---*/

assert.sameValue(
  WeakSet.prototype.constructor,
  WeakSet,
  'The value of WeakSet.prototype.constructor is "WeakSet"'
);
