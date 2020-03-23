load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.7
description: >
  Return a property descriptor object as a data descriptor.
info: >
  26.1.7 Reflect.getOwnPropertyDescriptor ( target, propertyKey )

  ...
  4. Let desc be target.[[GetOwnProperty]](key).
  5. ReturnIfAbrupt(desc).
  6. Return FromPropertyDescriptor(desc).
includes: [compareArray.js]
---*/

var o1 = {
  p: 'foo'
};

var result = Reflect.getOwnPropertyDescriptor(o1, 'p');

assert(
  compareArray(
    Object.keys(result),
    ['value', 'writable', 'enumerable', 'configurable']
  )
);
assert.sameValue(result.value, 'foo');
assert.sameValue(result.enumerable, true);
assert.sameValue(result.configurable, true);
assert.sameValue(result.writable, true);
