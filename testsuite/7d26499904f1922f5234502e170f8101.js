load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.4
description: >
  Reflect.deleteProperty.name value and property descriptor
info: >
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.deleteProperty.name, 'deleteProperty',
  'The value of `Reflect.deleteProperty.name` is `"deleteProperty"`'
);

verifyNotEnumerable(Reflect.deleteProperty, 'name');
verifyNotWritable(Reflect.deleteProperty, 'name');
verifyConfigurable(Reflect.deleteProperty, 'name');
