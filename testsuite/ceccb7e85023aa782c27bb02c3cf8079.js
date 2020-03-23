load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.8
description: >
  Map.prototype.keys.length value and descriptor.
info: >
  Map.prototype.keys ()

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Map.prototype.keys.length, 0,
  'The value of `Map.prototype.keys.length` is `0`'
);

verifyNotEnumerable(Map.prototype.keys, 'length');
verifyNotWritable(Map.prototype.keys, 'length');
verifyConfigurable(Map.prototype.keys, 'length');
