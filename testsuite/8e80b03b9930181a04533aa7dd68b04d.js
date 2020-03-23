load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Array.prototype.copyWithin.name value and descriptor.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.copyWithin.name, 'copyWithin',
  'The value of `Array.prototype.copyWithin.name` is `"copyWithin"`'
);

verifyNotEnumerable(Array.prototype.copyWithin, 'name');
verifyNotWritable(Array.prototype.copyWithin, 'name');
verifyConfigurable(Array.prototype.copyWithin, 'name');
