load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is not a valid BindingIdentifier for GeneratorExpressions.
  es6id: 12.1.1
  flags: [noStrict]
  negative:
    phase: early
    type: SyntaxError
 ---*/

var g = function* yield() {};
