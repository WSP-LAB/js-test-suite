load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.13
description: >
  Throws a TypeError if target is a Symbol
info: >
  26.1.13 Reflect.set ( target, propertyKey, V [ , receiver ] )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Reflect.set(Symbol(1), 'p', 42);
});
