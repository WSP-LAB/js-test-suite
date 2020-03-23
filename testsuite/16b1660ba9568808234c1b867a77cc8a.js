load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: |
  Return value from [[ByteLength]] internal slot
info: >
  22.2.3.2 get %TypedArray%.prototype.byteLength

  ...
  6. Let size be the value of O's [[ByteLength]] internal slot.
  7. Return size.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var bytesPerElement = TA.BYTES_PER_ELEMENT;
  var ta1 = new TA();
  assert.sameValue(ta1.byteLength, 0);

  var ta2 = new TA(42);
  assert.sameValue(ta2.byteLength, 42 * bytesPerElement);
});
