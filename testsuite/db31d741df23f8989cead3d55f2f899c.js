load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: >
  Throws a TypeError buffer is detached on Get custom constructor. Using other
  targetType
info: >
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  9. Let A be ? TypedArraySpeciesCreate(O, « count »).
  ...
  14. If SameValue(srcType, targetType) is false, then
    a. Let n be 0.
    b. Repeat, while k < final
      ...
      ii. Let kValue be ? Get(O, Pk).
      ...
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [Symbol.species]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  sample.constructor = {};
  sample.constructor[Symbol.species] = function(count) {
    var other = TA === Int8Array ? Int16Array : Int8Array;
    $DETACHBUFFER(sample.buffer);
    return new other(count);
  };

  assert.throws(TypeError, function() {
    sample.slice();
  }, "step 14.b.ii - ? Get(O, Pk), O has a detached buffer");
});
