load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: The getter method does not throw with a detached buffer
info: >
  22.2.3.32 get %TypedArray%.prototype [ @@toStringTag ]

  ...
  4. Let name be the value of O's [[TypedArrayName]] internal slot.
  5. Assert: name is a String value.
  6. Return name.
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);
  $DETACHBUFFER(sample.buffer);
  assert.sameValue(sample[Symbol.toStringTag], TA.name);
});
