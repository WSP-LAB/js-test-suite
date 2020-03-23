load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: -0 values on begin and end
info: >
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert(
    compareArray(sample.subarray(-0), [40, 41, 42, 43]),
    "begin == -0"
  );
  assert(
    compareArray(sample.subarray(-0, 4), [40, 41, 42, 43]),
    "being == -0, end == length"
  );
  assert(
    compareArray(sample.subarray(0, -0), []),
    "being == 0, end == -0"
  );
  assert(
    compareArray(sample.subarray(-0, -0), []),
    "being == -0, end == -0"
  );
});
