load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is defined once for each realm.
info: >
  %ThrowTypeError% ( )

  The %ThrowTypeError% intrinsic is an anonymous built-in function
  object that is defined once for each realm.
---*/

var other = $.createRealm().global;
var localArgs = function(){ "use strict"; return arguments; }();
var otherArgs = (new other.Function('return arguments;'))();
var localThrowTypeError = Object.getOwnPropertyDescriptor(localArgs, "callee").get;
var otherThrowTypeError = Object.getOwnPropertyDescriptor(otherArgs, "callee").get;

assert.notSameValue(localThrowTypeError, otherThrowTypeError);
