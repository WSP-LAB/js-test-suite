load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-array-offset
description: >
  Throws a TypeError if targetBuffer is detached on ToInteger(offset)
info: >
  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  1. Assert: array is any ECMAScript language value other than an Object with a
  [[TypedArrayName]] internal slot. If it is such an Object, the definition in
  22.2.3.23.2 applies.
  ...
  6. Let targetOffset be ? ToInteger(offset).
  ...
  8. Let targetBuffer be the value of target's [[ViewedArrayBuffer]] internal
  slot.
  9. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(2);
  var calledOffset = 0;
  var obj = {
    valueOf: function() {
      $DETACHBUFFER(sample.buffer);
      calledOffset += 1;
    }
  };

  assert.throws(TypeError, function() {
    sample.set([1], obj);
  });

  assert.sameValue(calledOffset, 1);
});
