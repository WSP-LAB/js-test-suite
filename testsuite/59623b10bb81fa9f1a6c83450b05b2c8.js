load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setint8
description: >
  Detached buffer is only checked after ToIndex(requestIndex)
info: |
  24.2.4.15 DataView.prototype.setInt8 ( byteOffset, value )

  1. Let v be the this value.
  2. Return ? SetViewValue(v, byteOffset, true, "Int8", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let getIndex be ? ToIndex(requestIndex).
  ...
  7. Let buffer be view.[[ViewedArrayBuffer]].
  8. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);

assert.throws(RangeError, function() {
  sample.setInt8(Infinity, 0);
}, "Infinity");

assert.throws(RangeError, function() {
  sample.setInt8(-1, 0);
});
