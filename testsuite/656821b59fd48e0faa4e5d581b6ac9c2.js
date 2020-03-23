load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Return abrupt from ToInteger(begin), begin is symbol
info: >
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  7. Let relativeBegin be ? ToInteger(begin).
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

var s = Symbol("1");

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  
  assert.throws(TypeError, function() {
    sample.subarray(s);
  });
});
