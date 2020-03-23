load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  Returns abrupt from callbackfn
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  assert.throws(Test262Error, function() {
    sample.map(function() {
      throw new Test262Error();
    });
  });
});
