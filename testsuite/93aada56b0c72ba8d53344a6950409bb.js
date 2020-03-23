load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.3
description: >
  Reflect.defineProperty.length value and property descriptor
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.defineProperty.length, 3,
  'The value of `Reflect.defineProperty.length` is `3`'
);

verifyNotEnumerable(Reflect.defineProperty, 'length');
verifyNotWritable(Reflect.defineProperty, 'length');
verifyConfigurable(Reflect.defineProperty, 'length');
