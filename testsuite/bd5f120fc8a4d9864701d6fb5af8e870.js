load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.7
description: >
  Property type and descriptor.
info: >
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof String.prototype.includes,
  'function',
  '`typeof String.prototype.includes` is `function`'
);

verifyNotEnumerable(String.prototype, 'includes');
verifyWritable(String.prototype, 'includes');
verifyConfigurable(String.prototype, 'includes');
