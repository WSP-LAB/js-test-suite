load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-hasproperty-p
description: >
  Find inherited properties if property is not a CanonicalNumericIndexString
info: >
  9.4.5.2 [[HasProperty]](P)

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
    ...
  4. Return ? OrdinaryHasProperty(O, P).
  ...
features: [Reflect]
includes: [testTypedArray.js]
---*/

TypedArray.prototype.foo = 42;
TypedArray.prototype[42] = true;

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  TA.prototype.bar = 42;

  assert.sameValue(Reflect.has(sample, "subarray"), true, "subarray");
  assert.sameValue(Reflect.has(sample, "foo"), true, "foo");
  assert.sameValue(Reflect.has(sample, "bar"), true, "bar");
  assert.sameValue(Reflect.has(sample, "baz"), false, "baz");

  assert.sameValue(Reflect.has(sample, "42"), false, "42");
});
