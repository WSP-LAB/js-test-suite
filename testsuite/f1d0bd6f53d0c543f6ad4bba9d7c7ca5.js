load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: >
  Returns false if numericIndex is < 0
info: >
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      ii. Let intIndex be numericIndex.
      iv. If intIndex < 0, return false.
  ...
includes: [testTypedArray.js]
features: [Reflect]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 43]);

  assert.sameValue(
    Reflect.defineProperty(sample, "-1", {
      value: 42,
      configurable: false,
      enumerable: true,
      writable: true
    }),
    false,
    "-1"
  );
});
