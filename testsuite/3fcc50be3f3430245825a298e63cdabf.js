load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
  TypedArray's [[ByteOffset]] internal slot is always a positive number, test with negative zero.
info: >
  %TypedArray% ( buffer [ , byteOffset [ , length ] ] )

  ...
  6. Let offset be ? ToInteger(byteOffset).
  7. If offset < 0, throw a RangeError exception.
  8. If offset is -0, let offset be +0.
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TAConstructor) {
  var typedArray = new TAConstructor(new ArrayBuffer(8), -0);
  assert.sameValue(typedArray.byteOffset, +0);
});
