load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.foreach
description: >
  Does not interact over non-integer properties
info: >
  22.2.3.12 %TypedArray%.prototype.forEach ( callbackfn [ , thisArg ] )

  ...
  6. Repeat, while k < len
    ...
    c. If kPresent is true, then
      ...
      ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([7, 8]);

  var results = [];

  sample.foo = 42;
  sample[Symbol("1")] = 43;

  sample.forEach(function() {
    results.push(arguments);
  });

  assert.sameValue(results.length, 2, "results.length");

  assert.sameValue(results[0][1], 0, "results[0][1] - k");
  assert.sameValue(results[1][1], 1, "results[1][1] - k");

  assert.sameValue(results[0][0], 7, "results[0][0] - kValue");
  assert.sameValue(results[1][0], 8, "results[1][0] - kValue");
});
