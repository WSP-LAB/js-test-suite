load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.2.2
esid: sec-%typedarray%.of
description: >
  Custom constructor can return any TypedArray instance with higher or same
  length
info: |
  %TypedArray%.of ( ...items )

  1. Let len be the actual number of arguments passed to this function.
  ...
  5. Let newObj be ? TypedArrayCreate(C, « len »).
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var result;
  var custom = new TA(3);
  var ctor = function() {
    return custom;
  };

  result = TypedArray.of.call(ctor, 1, 2, 3);
  assert.sameValue(result, custom, "using iterator, same length");

  result = TypedArray.of.call(ctor, 1, 2);
  assert.sameValue(result, custom, "using iterator, higher length");
});
