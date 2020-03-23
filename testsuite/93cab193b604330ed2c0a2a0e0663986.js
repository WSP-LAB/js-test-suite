load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Returned instance with filtered values set on it
info: >
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  12. For each element e of kept
    a. Perform ! Set(A, ! ToString(n), e, true).
    b. Increment n by 1.
  13. Return A.
includes: [testTypedArray.js, compareArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([41, 1, 42, 7]);
  var result;

  result = sample.filter(function() { return true; });
  assert(compareArray(result, [41, 1, 42, 7]), "values are set #1");

  result = sample.filter(function(v) {
    return v > 40;
  });
  assert(compareArray(result, [41, 42]), "values are set #2");
});
