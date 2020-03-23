load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Throws a TypeError if buffer is detached
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  4. Let numberOffset be ? ToNumber(byteOffset).
  ...
  7. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [detachArrayBuffer.js]
---*/

var toNumberOffset = 0;
var obj = {
  valueOf: function() {
    toNumberOffset += 1;
    return 0;
  }
};

var ab = new ArrayBuffer(42);
$DETACHBUFFER(ab);

assert.throws(TypeError, function() {
  new DataView(ab, obj);
}, "throws if buffer is detached");

assert.sameValue(toNumberOffset, 1, "ToNumber(byteOffset) runs before");
