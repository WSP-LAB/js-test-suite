load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.5
description: WeakMap.prototype.set.length descriptor
info: >
  WeakMap.prototype.set ( key, value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  WeakMap.prototype.set.length, 2,
  'The value of `WeakMap.prototype.set.length` is `2`'
);

verifyNotEnumerable(WeakMap.prototype.set, 'length');
verifyNotWritable(WeakMap.prototype.set, 'length');
verifyConfigurable(WeakMap.prototype.set, 'length');
