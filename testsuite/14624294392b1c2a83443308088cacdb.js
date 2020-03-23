load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.1.1
description: >
  new Map returns abrupt from getting Map.prototype.set.
info: >
  Map ( [ iterable ] )

  ...
  7. Else,
    a. Let adder be Get(map, "add").
    b. ReturnIfAbrupt(adder).
---*/

Object.defineProperty(Map.prototype, 'set', {
  get: function() {
    throw new Test262Error();
  }
});

new Map();

assert.throws(Test262Error, function() {
  new Map([]);
});
