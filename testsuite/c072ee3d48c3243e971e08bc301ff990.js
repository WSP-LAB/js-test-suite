load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("e77abdb32f8bc9e31b285641e9710ef0.js");
load("67475d6f299e80572167f8e325dacbed.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set
es6id: 22.2.3.22.2
description: Preservation of bit-level encoding
info: |
  [...]
  28. Else,
      a. NOTE: If srcType and targetType are the same, the transfer must be
         performed in a manner that preserves the bit-level encoding of the
         source data.
      b. Repeat, while targetByteIndex < limit
         i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8").
         ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8",
             value).
         iii. Set srcByteIndex to srcByteIndex + 1.
         iv. Set targetByteIndex to targetByteIndex + 1.
includes: [nans.js, compareArray.js, testTypedArray.js]
---*/

function body(FloatArray) {
  var source = new FloatArray(distinctNaNs);
  var target = new FloatArray(distinctNaNs.length);
  var sourceBytes, targetBytes;

  target.set(source);

  sourceBytes = new Uint8Array(source.buffer);
  targetBytes = new Uint8Array(target.buffer);

  assert(compareArray(sourceBytes, targetBytes))
}

testWithTypedArrayConstructors(body, [Float32Array, Float64Array]);
