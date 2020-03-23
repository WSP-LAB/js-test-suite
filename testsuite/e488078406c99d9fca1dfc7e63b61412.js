load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.4
description: >
  @@species property of TypedArray
info: >
  22.2.2.4 get %TypedArray% [ @@species ]

  %TypedArray%[@@species] is an accessor property whose set accessor function
  is undefined.
features: [Symbol.species]
includes: [testTypedArray.js]
---*/

var desc = Object.getOwnPropertyDescriptor(TypedArray, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
