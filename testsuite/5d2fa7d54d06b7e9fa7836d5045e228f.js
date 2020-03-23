load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.2.4.1
description: Subclassed Function instances has length and name properties
info: >
  19.2.4.1 length

  The value of the length property is an integer that indicates the typical
  number of arguments expected by the function. However, the language permits
  the function to be invoked with some other number of arguments. The behaviour
  of a function when invoked on a number of arguments other than the number
  specified by its length property depends on the function. This property has
  the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

class Fn extends Function {}

var fn = new Fn('a', 'b', 'return a + b');

assert.sameValue(fn.length, 2);

verifyNotEnumerable(fn, 'length');
verifyNotWritable(fn, 'length');
verifyConfigurable(fn, 'length');
