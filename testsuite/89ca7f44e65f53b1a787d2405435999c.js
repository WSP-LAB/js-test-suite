load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: Use internal ArrayLength instead of getting a length property
info: >
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  ...
  3. Let len be the value of obj's [[ArrayLength]] internal slot.
includes: [testTypedArray.js, compareArray.js]
---*/

var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};

Object.defineProperty(TypedArray.prototype, "length", desc);

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 42, 42]);
  getCalls = 0;

  Object.defineProperty(TA.prototype, "length", desc);
  Object.defineProperty(sample, "length", desc);

  var result = sample.sort();

  assert.sameValue(getCalls, 0, "ignores length properties");
  assert(
    compareArray(result, sample),
    "result is not affected by custom length"
  );
});
