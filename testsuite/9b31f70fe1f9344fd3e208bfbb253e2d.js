load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when property exists and is configurable
info: |
    [...]
    3. Let desc be PropertyDescriptor{[[Set]]: setter, [[Enumerable]]: true,
       [[Configurable]]: true}.
    4. Let key be ? ToPropertyKey(P).
    5. Perform ? DefinePropertyOrThrow(O, key, desc).
    6. Return undefined.
includes: [propertyHelper.js]
---*/

var subject = {};
var originalGet = function() {};
var originalSet = function() {};
var newSet = function() {};
var desc, result;

Object.defineProperty(subject, 'stringAcsr', {
  get: originalGet,
  set: originalSet,
  enumerable: false,
  configurable: true
});

result = subject.__defineSetter__('stringAcsr', newSet);

desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');
verifyEnumerable(subject, 'stringAcsr');
verifyConfigurable(subject, 'stringAcsr');

assert.sameValue(desc.get, originalGet, 'descriptor `get` method');
assert.sameValue(desc.set, newSet, 'descriptor `set` method');
assert.sameValue(desc.value, undefined, 'descriptor `value` property');

assert.sameValue(result, undefined, 'method return value');
