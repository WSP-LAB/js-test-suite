load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: |
  Returns a new typedArray instance from the same constructor with the same
  length and a new buffer object - testing on an instance with length > 0
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  6. Let A be ? TypedArraySpeciesCreate(O, « len »).
  7. Let k be 0.
  8. Repeat, while k < len
    ...
    c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
    ...
  9. Return A.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  var result = sample.map(function(v) {
    return v;
  });

  assert.notSameValue(result, sample, "new typedArray object");
  assert.sameValue(result.constructor, sample.constructor, "same constructor");
  assert.sameValue(result.length, 3, "same length");
  assert.notSameValue(result.buffer, sample.buffer, "new buffer");
});
