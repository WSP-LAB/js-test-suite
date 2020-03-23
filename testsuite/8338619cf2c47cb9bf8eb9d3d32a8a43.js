load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.1
description: >
  Return target result
info: >
  26.1.1 Reflect.apply ( target, thisArgument, argumentsList )

  ...
  4. Perform PrepareForTailCall().
  5. Return Call(target, thisArgument, args).
---*/

var o = {};
function fn() {
  return o;
}

var result = Reflect.apply(fn, 1, []);

assert.sameValue(result, o);
