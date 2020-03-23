load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.22
description: Throws a TypeError exception when invoked as a function
info: >
  22.2.3.22 %TypedArray%.prototype.set ( overloaded [ , offset ])

  This function is not generic. The this value must be an object with a
  [[TypedArrayName]] internal slot.
includes: [testTypedArray.js]
---*/

var set = TypedArray.prototype.set;

assert.sameValue(typeof set, 'function');

assert.throws(TypeError, function() {
  set();
});
