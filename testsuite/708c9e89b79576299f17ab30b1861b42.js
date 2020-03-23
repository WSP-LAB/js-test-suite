load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-set-p-v-receiver
description: >
  Does not throw on an instance with a detached buffer if key is not a number
info: >
  9.4.5.5 [[Set]] ( P, V, Receiver)

  ...
  2. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
    ...
  3. Return ? OrdinarySet(O, P, V, Receiver).
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [Reflect]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 43]);
  $DETACHBUFFER(sample.buffer);

  assert.sameValue(Reflect.set(sample, "foo", "test262"), true);
  assert.sameValue(sample.foo, "test262");
});
