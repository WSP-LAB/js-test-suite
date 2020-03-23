load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.31
description: If this value is not Object, return undefined.
info: >
  22.2.3.31 get %TypedArray%.prototype [ @@toStringTag ]

  1. Let O be the this value.
  2. If Type(O) is not Object, return undefined.
  ...
features: [Symbol.toStringTag]
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
).get;

assert.sameValue(getter(), undefined);
