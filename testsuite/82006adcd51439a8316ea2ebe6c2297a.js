load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Return abrupt from ToInteger(end)
info: >
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  9. If end is undefined, let relativeEnd be srcLength; else, let relativeEnd
  be ? ToInteger(end).
  ...
includes: [testTypedArray.js]
---*/

var o1 = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var o2 = {
  toString: function() {
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  
  assert.throws(Test262Error, function() {
    sample.subarray(0, o1);
  });
  
  assert.throws(Test262Error, function() {
    sample.subarray(0, o2);
  });
});
