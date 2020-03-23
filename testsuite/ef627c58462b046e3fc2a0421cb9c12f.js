load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.from
description: >
  %TypedArray%.from.length is 1.
info: >
  %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  17 ECMAScript Standard Built-in Objects:

  Every built-in Function object, including constructors, has a length property
  whose value is an integer. Unless otherwise specified, this value is equal to
  the largest number of named arguments shown in the subclause headings for the
  function description. Optional parameters (which are indicated with brackets:
  [ ]) or rest parameters (which are shown using the form «...name») are not
  included in the default argument count.

  Unless otherwise specified, the length property of a built-in Function object
  has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

assert.sameValue(TypedArray.from.length, 1);

verifyNotEnumerable(TypedArray.from, "length");
verifyNotWritable(TypedArray.from, "length");
verifyConfigurable(TypedArray.from, "length");
