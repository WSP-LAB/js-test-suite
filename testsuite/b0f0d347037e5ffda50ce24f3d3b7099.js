load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.1.1
description: >
  Throws a TypeError if `set` is not callable on Map constructor with a
  iterable argument.
info: >
  Map ( [ iterable ] )

  When the Map function is called with optional argument the following steps are
  taken:

  ...
  5. If iterable is not present, let iterable be undefined.
  6. If iterable is either undefined or null, let iter be undefined.
  7. Else,
    a. Let adder be Get(map, "set").
    b. ReturnIfAbrupt(adder).
    c. If IsCallable(adder) is false, throw a TypeError exception.
---*/

Map.prototype.set = null;

assert.throws(TypeError, function() {
  new Map([[1,1], [2,2]]);
});
