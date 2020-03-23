load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Returns a new instance sharing the same buffer
info: >
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);
  var buffer = sample.buffer;
  var result = sample.subarray(1);

  assert.notSameValue(result, sample, "returns a new instance");
  assert.sameValue(result.buffer, sample.buffer, "shared buffer");
  assert.sameValue(sample.buffer, buffer, "original buffer is preserved");

  sample[1] = 100;
  assert(
    compareArray(result, [100, 42, 43]),
    "changes on the original sample values affect the new instance"
  );

  result[1] = 111;
  assert(
    compareArray(sample, [40, 100, 111, 43]),
    "changes on the new instance values affect the original sample"
  );
});
