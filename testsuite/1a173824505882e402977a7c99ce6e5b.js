load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.31
description: >
  Return undefined if this value does not have a [[TypedArrayName]] internal slot
info: >
  22.2.3.31 get %TypedArray%.prototype [ @@toStringTag ]

  1. Let O be the this value.
  ...
  3. If O does not have a [[TypedArrayName]] internal slot, return undefined.
  ...
features: [Symbol.toStringTag]
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;

assert.sameValue(TypedArrayPrototype[Symbol.toStringTag], undefined);
