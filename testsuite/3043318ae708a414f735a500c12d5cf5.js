load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.fill
es6id: 22.2.3.8
description: >
  Returns `this`.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample1 = new TA();
  var result1 = sample1.fill(1);

  assert.sameValue(result1, sample1);

  var sample2 = new TA(42);
  var result2 = sample2.fill(7);
  assert.sameValue(result2, sample2);
});
