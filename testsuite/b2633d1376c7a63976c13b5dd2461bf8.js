load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.6
description: >
  Reflect.get.length value and property descriptor
info: >
  26.1.6 Reflect.get ( target, propertyKey [ , receiver ])

  The length property of the get function is 2.
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.get.length, 2,
  'The value of `Reflect.get.length` is `2`'
);

verifyNotEnumerable(Reflect.get, 'length');
verifyNotWritable(Reflect.get, 'length');
verifyConfigurable(Reflect.get, 'length');
