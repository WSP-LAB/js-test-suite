load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.2
description: >
  Reflect.construct.length value and property descriptor
info: >
  26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )

  The length property of the construct function is 2.
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.construct.length, 2,
  'The value of `Reflect.construct.length` is `2`'
);

verifyNotEnumerable(Reflect.construct, 'length');
verifyNotWritable(Reflect.construct, 'length');
verifyConfigurable(Reflect.construct, 'length');
