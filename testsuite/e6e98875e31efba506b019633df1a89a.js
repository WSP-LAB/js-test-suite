load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.7
description: >
  Use a symbol value on property key.
info: >
  26.1.7 Reflect.getOwnPropertyDescriptor ( target, propertyKey )

  ...
  2. Let key be ToPropertyKey(propertyKey).
  ...

  7.1.14 ToPropertyKey ( argument )

  ...
  3. If Type(key) is Symbol, then
    a. Return key.
  ...
includes: [compareArray.js]
features: [Symbol]
---*/

var o = {};
var s = Symbol('42');
o[s] = 42;

var result = Reflect.getOwnPropertyDescriptor(o, s);

assert(
  compareArray(
    Object.keys(result),
    ['value', 'writable', 'enumerable', 'configurable']
  )
);
assert.sameValue(result.value, 42);
assert.sameValue(result.enumerable, true);
assert.sameValue(result.configurable, true);
assert.sameValue(result.writable, true);
