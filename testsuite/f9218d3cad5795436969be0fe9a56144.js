load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.1
description: |
  Return buffer from [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.1 get %TypedArray%.prototype.buffer

  ...
  4. Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
  5. Return buffer.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var buffer = new ArrayBuffer(TA.BYTES_PER_ELEMENT);
  var ta = new TA(buffer);

  assert.sameValue(ta.buffer, buffer);
});
