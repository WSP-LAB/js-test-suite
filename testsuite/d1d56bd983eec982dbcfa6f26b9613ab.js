load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is not extensible.
info: >
  %ThrowTypeError% ( )

  The value of the [[Extensible]] internal slot of a %ThrowTypeError%
  function is false.
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function(){ "use strict"; return arguments; }(), "callee").get;

assert.sameValue(Object.isExtensible(ThrowTypeError), false);
