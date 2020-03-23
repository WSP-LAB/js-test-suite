load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: Throws a TypeError buffer is detached on Get constructor.
info: >
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  9. Let A be ? TypedArraySpeciesCreate(O, « count »).
  ...
  14. If SameValue(srcType, targetType) is false, then
    ...
  15. Else if count > 0, then
    a. Let srcBuffer be the value of O's [[ViewedArrayBuffer]] internal slot.
    b. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  Object.defineProperty(sample, "constructor", {
    get: function() {
      $DETACHBUFFER(sample.buffer);
    }
  });
  assert.throws(TypeError, function() {
    sample.slice();
  });
});
