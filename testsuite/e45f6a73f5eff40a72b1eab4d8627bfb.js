load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.1.1
description: >
  Return abrupt after getting `add` method.
info: >
  23.4.1.1 WeakSet ( [ iterable ] )

  ...
  5. If iterable is not present, let iterable be undefined.
  6. If iterable is either undefined or null, let iter be undefined.
  7. Else,
    a. Let adder be Get(set, "add").
    b. ReturnIfAbrupt(adder).
    ...
---*/

Object.defineProperty(WeakSet.prototype, 'add', {
  get: function() {
    throw new Test262Error();
  }
});

new WeakSet();
new WeakSet(null);

assert.throws(Test262Error, function() {
  new WeakSet([]);
});
