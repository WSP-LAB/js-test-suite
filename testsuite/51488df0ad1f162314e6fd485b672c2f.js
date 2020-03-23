load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
es6id: 9.5.13
description: >
  Arguments array is created in the Realm of the current execution context
info: |
  [...]
  7. Let argArray be CreateArrayFromList(argumentsList).
  8. Return ? Call(trap, handler, « target, thisArgument, argArray »).
---*/

var f = $.createRealm().global.eval(
  'new Proxy(function() {}, { apply: function(_, __, args) { return args; } })'
);

assert.sameValue(f().constructor, Array);
