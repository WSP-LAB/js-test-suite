load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Subarray may return a new instance with the same length
info: >
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  function testRes(result, msg) {
    assert.sameValue(result.length, 4, msg);
    assert.sameValue(result[0], 40, msg + " & result[0] === 40");
    assert.sameValue(result[1], 41, msg + " & result[1] === 41");
    assert.sameValue(result[2], 42, msg + " & result[2] === 42");
    assert.sameValue(result[3], 43, msg + " & result[3] === 43");
  }

  testRes(sample.subarray(0), "begin == 0");
  testRes(sample.subarray(-4), "begin == -srcLength");
  testRes(sample.subarray(-5), "begin < -srcLength");

  testRes(sample.subarray(0, 4), "begin == 0, end == srcLength");
  testRes(sample.subarray(-4, 4), "begin == -srcLength, end == srcLength");
  testRes(sample.subarray(-5, 4), "begin < -srcLength, end == srcLength");

  testRes(sample.subarray(0, 5), "begin == 0, end > srcLength");
  testRes(sample.subarray(-4, 5), "begin == -srcLength, end > srcLength");
  testRes(sample.subarray(-5, 5), "begin < -srcLength, end > srcLength");
});
