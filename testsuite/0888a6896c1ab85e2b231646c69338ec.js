load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 20.3.4.45
description: Behavior when `this` value is not an Object
info: >
    1. Let O be the this value.
    2. If Type(O) is not Object, throw a TypeError exception.
features: [Symbol.toPrimitive]
---*/

assert.sameValue(typeof Date.prototype[Symbol.toPrimitive], 'function');

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call(undefined, 'string');
});

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call(null, 'string');
});

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call(86, 'string');
});

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call('', 'string');
});

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call(true, 'string');
});
