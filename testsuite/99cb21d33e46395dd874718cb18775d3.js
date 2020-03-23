load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("e77abdb32f8bc9e31b285641e9710ef0.js");
load("67475d6f299e80572167f8e325dacbed.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
es6id: 22.2.3.23
description: Preservation of bit-level encoding
info: |
  [...]
  15. Else if count > 0, then
      [...]
      e. NOTE: If srcType and targetType are the same, the transfer must be
         performed in a manner that preserves the bit-level encoding of the
         source data.
      f. Let srcByteOffet be the value of O's [[ByteOffset]] internal slot.
      g. Let targetByteIndex be A's [[ByteOffset]] internal slot.
      h. Let srcByteIndex be (k × elementSize) + srcByteOffet.
      i. Let limit be targetByteIndex + count × elementSize.
      j. Repeat, while targetByteIndex < limit
         i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, "Uint8").
         ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, "Uint8",
             value).
         iii. Increase srcByteIndex by 1.
         iv. Increase targetByteIndex by 1.
includes: [nans.js, compareArray.js, testTypedArray.js]
---*/

function body(FloatArray) {
  var subject = new FloatArray(distinctNaNs);
  var sliced, subjectBytes, slicedBytes;

  sliced = subject.slice();

  subjectBytes = new Uint8Array(subject.buffer);
  slicedBytes = new Uint8Array(sliced.buffer);

  assert(compareArray(subjectBytes, slicedBytes));
}

testWithTypedArrayConstructors(body, [Float32Array, Float64Array]);
