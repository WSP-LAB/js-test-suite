load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The prototype of generator functions declared as methods is the
    Generator Prototype.
es6id: 14.4.13
features: [generators]
---*/

var obj = { *method() {} };
assert.sameValue(
  Object.getPrototypeOf(obj.method),
  Object.getPrototypeOf(function*() {})
);
