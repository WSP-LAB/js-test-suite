load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      Generators declared with GeneratorDeclaration syntax do not require a
      `yield` expression.
  es6id: 14.4
 ---*/

function *foo(a) {}

var g = foo(3);

assert.sameValue(g.next().value, undefined);
assert.sameValue(g.next().done, true);
