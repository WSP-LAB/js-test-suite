load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.13
description: >
  Property type and descriptor.
info: >
  22.1.3.13 Array.prototype.keys ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.keys,
  'function',
  '`typeof Array.prototype.keys` is `function`'
);

verifyNotEnumerable(Array.prototype, 'keys');
verifyWritable(Array.prototype, 'keys');
verifyConfigurable(Array.prototype, 'keys');
