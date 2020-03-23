load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype.length
description: Returns 0 if the instance has a detached buffer
info: >
  22.2.3.18 get %TypedArray%.prototype.length

  ...
  5. Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
  6. If IsDetachedBuffer(buffer) is true, return 0.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(42);
  $DETACHBUFFER(sample.buffer);
  assert.sameValue(sample.length, 0);
});
