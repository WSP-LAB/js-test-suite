load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.1
description: WeakSet.prototype.add.length descriptor
info: >
  WeakSet.prototype.add ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  WeakSet.prototype.add.length, 1,
  'The value of `WeakSet.prototype.add.length` is `1`'
);

verifyNotEnumerable(WeakSet.prototype.add, 'length');
verifyNotWritable(WeakSet.prototype.add, 'length');
verifyConfigurable(WeakSet.prototype.add, 'length');
