load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.10
description: >
  Reflect.isExtensible.length value and property descriptor
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.isExtensible.length, 1,
  'The value of `Reflect.isExtensible.length` is `1`'
);

verifyNotEnumerable(Reflect.isExtensible, 'length');
verifyNotWritable(Reflect.isExtensible, 'length');
verifyConfigurable(Reflect.isExtensible, 'length');
