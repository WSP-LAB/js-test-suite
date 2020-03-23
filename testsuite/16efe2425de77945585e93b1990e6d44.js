load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: Infinity values on start and end
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert(
    compareArray(sample.slice(-Infinity), [40, 41, 42, 43]),
    "start == -Infinity"
  );
  assert(
    compareArray(sample.slice(Infinity), []),
    "start == Infinity"
  );
  assert(
    compareArray(sample.slice(0, -Infinity), []),
    "end == -Infinity"
  );
  assert(
    compareArray(sample.slice(0, Infinity), [40, 41, 42, 43]),
    "end == Infinity"
  );
});
