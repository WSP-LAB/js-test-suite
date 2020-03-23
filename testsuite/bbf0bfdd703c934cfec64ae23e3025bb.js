load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype.length
description: |
  Return value from the [[ArrayLength]] internal slot
info: >
  22.2.3.18 get %TypedArray%.prototype.length

  ...
  6. Let length be the value of O's [[ArrayLength]] internal slot.
  7. Return length.

  ---

  The current tests on `prop-desc.js` and `length.js` already assert `length` is
  not a dynamic property as in regular arrays.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var ta1 = new TA();
  assert.sameValue(ta1.length, 0);

  var ta2 = new TA(42);
  assert.sameValue(ta2.length, 42);
});
