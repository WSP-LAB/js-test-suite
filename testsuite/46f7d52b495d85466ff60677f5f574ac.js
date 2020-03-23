load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
  Array.prototype.find.name value and descriptor.
info: >
  22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.find.name, 'find',
  'The value of `Array.prototype.find.name` is `"find"`'
);

verifyNotEnumerable(Array.prototype.find, 'name');
verifyNotWritable(Array.prototype.find, 'name');
verifyConfigurable(Array.prototype.find, 'name');
