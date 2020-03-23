load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%arrayiteratorprototype%.next
description: If the underlying TypedArray is detached during iteration, throw
info: >
  %ArrayIteratorPrototype%.next( )

  ...
  8. If _a_ has a [[TypedArrayName]] internal slot, then
    a. If IsDetachedBuffer(_a_.[[ViewedArrayBuffer]]) is *true*, throw a *TypeError* exception.
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(TA => {
  var typedArray = new TA(5);
  var i = 0;
  assert.throws(TypeError, () => {
    for (let key of typedArray.keys()) {
      $.detachArrayBuffer(typedArray.buffer);
      i++;
    }
  });
  assert.sameValue(i, 1);
});
