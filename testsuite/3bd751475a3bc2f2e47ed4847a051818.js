load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-hasproperty-p
description: Return false if P's value is "-0"
info: >
  9.4.5.2 [[HasProperty]](P)

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      iv. If numericIndex = -0, return false.
  ...
features: [Reflect]
includes: [testTypedArray.js]
---*/


// Prevents false positives using OrdinaryHasProperty
TypedArray.prototype["-0"] = "test262";

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  assert.sameValue(Reflect.has(sample, "-0"), false, "-0");
});
