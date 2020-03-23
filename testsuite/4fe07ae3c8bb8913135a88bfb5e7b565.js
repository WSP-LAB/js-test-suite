load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
  Array.of.name value and property descriptor
info: >
  Array.of ( ...items )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.of.name, 'of',
  'The value of `Array.of.name` is `"of"`'
);

verifyNotEnumerable(Array.of, 'name');
verifyNotWritable(Array.of, 'name');
verifyConfigurable(Array.of, 'name');
