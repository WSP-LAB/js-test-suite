load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 7.2.
description: >
    Object.is/SameValue: Symbol
---*/
var symA = Symbol('66');
var symB = Symbol('66');


assert.sameValue(Object.is(symA, symA), true, "`Object.is(symA, symA)` returns `true`");
assert.sameValue(Object.is(symB, symB), true, "`Object.is(symB, symB)` returns `true`");
assert.sameValue(Object.is(symA, symB), false, "`Object.is(symA, symB)` returns `false`");


