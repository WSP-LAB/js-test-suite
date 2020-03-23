load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError%.length is 0.
info: >
  %ThrowTypeError% ( )

  The length property of a %ThrowTypeError% function has the attributes
  { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function(){ "use strict"; return arguments; }(), "callee").get;

assert.sameValue(ThrowTypeError.length, 0);

verifyNotEnumerable(ThrowTypeError, "length");
verifyNotWritable(ThrowTypeError, "length");
verifyNotConfigurable(ThrowTypeError, "length");
