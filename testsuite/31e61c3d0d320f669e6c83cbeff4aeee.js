load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-hasproperty-p
description: >
  Return boolean from Symbol properties
info: >
  9.4.5.2 [[HasProperty]](P)

  ...
  3. If Type(P) is String, then
    ...
  4. Return ? OrdinaryHasProperty(O, P).
features: [Reflect, Symbol]
includes: [testTypedArray.js]
---*/

var s = Symbol("foo");

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  assert.sameValue(Reflect.has(sample, s), false);

  Object.defineProperty(sample, s, { value: 42 });

  assert.sameValue(Reflect.has(sample, s), true);
});
