load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.1.1
description: >
  Throws a TypeError if Map is called without a newTarget.
info: >
  Map ( [ iterable ] )

  When the Map function is called with optional argument the following steps
  are taken:

  1. If NewTarget is undefined, throw a TypeError exception.
  ...

---*/

assert.throws(TypeError, function() {
  Map();
});

assert.throws(TypeError, function() {
  Map([]);
});