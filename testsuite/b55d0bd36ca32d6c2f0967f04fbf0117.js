load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is an anonymous function.
info: >
  %ThrowTypeError% ( )

  The %ThrowTypeError% intrinsic is an anonymous built-in function
  object that is defined once for each Realm.
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function(){ "use strict"; return arguments; }(), "callee").get;

assert.sameValue(Object.prototype.hasOwnProperty.call(ThrowTypeError, "name"), false);
