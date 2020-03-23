load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 André Bargull. All rights reserved.
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

var ThrowTypeError = Object.getOwnPropertyDescriptor(function(){ "use strict"; return arguments; }(), "callee").get;

// Test with Function.prototype.arguments and Function.prototype.caller properties.
var argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, "arguments");
var callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");

assert.sameValue(ThrowTypeError, argumentsDesc.get, "arguments.get");
assert.sameValue(ThrowTypeError, argumentsDesc.set, "arguments.set");
assert.sameValue(ThrowTypeError, callerDesc.set, "caller.set");
assert.sameValue(ThrowTypeError, callerDesc.get, "caller.get");
