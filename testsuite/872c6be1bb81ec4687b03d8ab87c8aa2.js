load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findindex
es6id: 22.2.3.11
description: >
  Change values during predicate call
info: >
  22.2.3.11 %TypedArray%.prototype.findIndex ( predicate [ , thisArg ] )

  %TypedArray%.prototype.findIndex is a distinct function that implements the
  same algorithm as Array.prototype.findIndex as defined in 22.1.3.9 except that
  the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length".

  ...

  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  6. Repeat, while k < len
    ...
    c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  ...
includes: [compareArray.js, testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var arr = [10, 20, 30];
  var sample;
  var result;

  sample = new TA(3);
  sample.findIndex(function(val, i) {
    sample[i] = arr[i];

    assert.sameValue(val, 0, "value is not mapped to instance");
  });
  assert(compareArray(sample, arr), "values set during each predicate call");

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i === 0 ) {
      sample[2] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, 2, "value found");

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i === 0 ) {
      sample[2] = 7;
    }
    return val === 30;
  });
  assert.sameValue(result, -1, "value not found");

  sample = new TA(arr);
  result = sample.findIndex(function(val, i) {
    if ( i > 0 ) {
      sample[0] = 7;
    }
    return val === 7;
  });
  assert.sameValue(result, -1, "value not found - changed after call");
});