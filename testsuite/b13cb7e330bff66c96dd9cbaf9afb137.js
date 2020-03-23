load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.16
esid: sec-%typedarray%.prototype.keys
description: Return an iterator for the keys.
info: >
  22.2.3.16 %TypedArray%.prototype.keys ( )

  ...
  3. Return CreateArrayIterator(O, "key").
includes: [testTypedArray.js]
---*/

var sample = new Int8Array([0, 42, 64]);

testWithTypedArrayConstructors(function(TA) {
  var typedArray = new TA(sample);
  var itor = typedArray.keys();

  var next = itor.next();
  assert.sameValue(next.value, 0);
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, 1);
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, 2);
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, undefined);
  assert.sameValue(next.done, true);
});
