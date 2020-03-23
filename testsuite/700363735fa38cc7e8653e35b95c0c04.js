load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  The callbackfn returned values are applied to the new instance
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  6. Let A be ? TypedArraySpeciesCreate(O, « len »).
  7. Let k be 0.
  8. Repeat, while k < len
    ...
    c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
    d. Perform ? Set(A, Pk, mappedValue, true).
    ...
  9. Return A.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([1, 2, 4]);
  var result = sample.map(function(v) {
    return v * 3;
  });

  assert.sameValue(result[0], 3, "result[0] == 3");
  assert.sameValue(result[1], 6, "result[1] == 6");
  assert.sameValue(result[2], 12, "result[2] == 12");
});
