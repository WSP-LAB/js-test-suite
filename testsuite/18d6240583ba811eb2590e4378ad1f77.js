load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.filter
description: callbackfn is called for each item before TypedArraySpeciesCreate
info: >
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  9. Repeat, while k < len
    ...
    c. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
    ...
  10. Let A be ? TypedArraySpeciesCreate(O, « captured »).
  ...
includes: [testTypedArray.js]
features: [Symbol.species]
---*/

testWithTypedArrayConstructors(function(TA) {
  var length = 42;
  var sample = new TA(length);
  var calls = 0;
  var before = false;

  sample.constructor = {};
  Object.defineProperty(sample.constructor, Symbol.species, {
    get: function() {
      before = calls === length;
    }
  });

  sample.filter(function() {
    calls++;
  });

  assert.sameValue(calls, 42, "callbackfn called for each item");
  assert.sameValue(before, true, "all callbackfn called before");
});
