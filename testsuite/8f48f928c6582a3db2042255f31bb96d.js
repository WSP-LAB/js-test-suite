load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.reduce
description: >
  The callbackfn return does not change the `this` instance
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([0, 1, 0]);

  sample.reduce(function() {
    return 42;
  }, 7);

  assert.sameValue(sample[0], 0, "[0] == 0");
  assert.sameValue(sample[1], 1, "[1] == 1");
  assert.sameValue(sample[2], 0, "[2] == 0");
});
