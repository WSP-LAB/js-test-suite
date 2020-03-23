load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.1
description: >
  Reflect.apply.length value and property descriptor
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.apply.length, 3,
  'The value of `Reflect.apply.length` is `3`'
);

verifyNotEnumerable(Reflect.apply, 'length');
verifyNotWritable(Reflect.apply, 'length');
verifyConfigurable(Reflect.apply, 'length');
