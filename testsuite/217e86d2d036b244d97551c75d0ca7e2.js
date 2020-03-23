load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  TypedArray has a "length" property whose value is 0.
info: >
  22.2.1.1 %TypedArray% ()

  The length property of the %TypedArray% constructor function is 0.
  ...

  ES7 section 17: Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

assert.sameValue(TypedArray.length, 0);

verifyNotEnumerable(TypedArray, 'length');
verifyNotWritable(TypedArray, 'length');
verifyConfigurable(TypedArray, 'length');
