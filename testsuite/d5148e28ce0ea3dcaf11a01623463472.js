load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("54b448c9197917c78ad3479808ea1a56.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Instance buffer can be detached during loop
info: >
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  9. Repeat, while k < len
    ...
    b. Let kValue be ? Get(O, Pk).
    c. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
  ...
includes: [detachArrayBuffer.js, testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var loops = 0;
  var sample = new TA(2);

  assert.throws(TypeError, function() {
    sample.filter(function() {
      if (loops === 1) {
        throw new Test262Error("callbackfn called twice");
      }
      $DETACHBUFFER(sample.buffer);
      loops++;
    });
  });

  assert.sameValue(loops, 1);
});
