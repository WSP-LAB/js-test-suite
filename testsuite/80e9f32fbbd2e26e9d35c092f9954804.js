load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  [[ArrayLength]] is accessed in place of performing a [[Get]] of "length"
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  3. Let len be the value of O's [[ArrayLength]] internal slot.
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample1 = new TA(42);
  var loop = 0;

  Object.defineProperty(sample1, "length", {value: 1});

  sample1.map(function() {
    loop++;
  });
  assert.sameValue(loop, 42, "data descriptor");

  loop = 0;
  var sample2 = new TA(4);
  Object.defineProperty(sample2, "length", {
    get: function() {
      throw new Test262Error(
        "Does not return abrupt getting length property"
      );
    }
  });

  sample2.map(function() {
    loop++;
  });
  assert.sameValue(loop, 4, "accessor descriptor");
});

