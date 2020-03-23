load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Returns full length result if every callbackfn returns boolean false
info: >
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  12. For each element e of kept
    a. Perform ! Set(A, ! ToString(n), e, true).
    b. Increment n by 1.
  13. Return A.
includes: [testTypedArray.js, compareArray.js]
features: [Symbol]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42]);

  [
    true,
    1,
    "test262",
    Symbol("1"),
    {},
    [],
    -1,
    Infinity,
    -Infinity,
    0.1,
    -0.1
  ].forEach(function(val) {
    var result = sample.filter(function() { return val; });
    assert(compareArray(result, sample), val);
  });
});
