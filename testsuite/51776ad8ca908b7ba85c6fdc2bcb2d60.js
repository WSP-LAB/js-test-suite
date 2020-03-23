load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: Returns error produced by accessing @@iterator
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  6. Let arrayLike be ? IterableToArrayLike(source).
  ...

  22.2.2.1.1 Runtime Semantics: IterableToArrayLike( items )

  1. Let usingIterator be ? GetMethod(items, @@iterator).
  ...
features: [Symbol.iterator]
includes: [testTypedArray.js]
---*/

var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    TA.from(iter);
  });
});
