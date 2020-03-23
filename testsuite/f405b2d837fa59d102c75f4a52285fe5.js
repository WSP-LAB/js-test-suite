load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  callbackfn is not callable
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  4. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  assert.throws(TypeError, function() {
    sample.map();
  });

  assert.throws(TypeError, function() {
    sample.map(undefined);
  });

  assert.throws(TypeError, function() {
    sample.map(null);
  });

  assert.throws(TypeError, function() {
    sample.map({});
  });

  assert.throws(TypeError, function() {
    sample.map(1);
  });

  assert.throws(TypeError, function() {
    sample.map("");
  });

  assert.throws(TypeError, function() {
    sample.map(false);
  });
});
