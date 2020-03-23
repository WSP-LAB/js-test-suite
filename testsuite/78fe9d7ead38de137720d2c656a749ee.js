load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.1
description: Subclassing Array
info: >
  22.1.1 The Array Constructor

  The Array constructor is designed to be subclassable. It may be used as the
  value of an extends clause of a class definition. (...)
includes: [compareArray.js]
---*/

class Sub extends Array {}

var a1 = new Sub(42, 'foo');

assert.sameValue(a1.length, 2);
assert.sameValue(a1[0], 42);
assert.sameValue(a1[1], 'foo');

a1.push(true);
assert.sameValue(a1.length, 3, 'Array#push updates the length property');
assert.sameValue(a1[0], 42);
assert.sameValue(a1[1], 'foo');
assert.sameValue(a1[2], true, 'Adds new item');

var a2 = new Sub(7);
assert.sameValue(a2.length, 7);

var a3 = new Sub();
assert(compareArray(a3, []));
assert.sameValue(a3.length, 0);
