load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.8
description: >
    Object.getOwnPropertySymbols returns all symbol properties that have descriptions
---*/

var sym = Symbol("description");

var obj = {};
obj[sym] = 1;

var syms = Object.getOwnPropertySymbols(obj);

assert.sameValue(syms[0], sym, "Array of symbols returned by `Object.getOwnPropertySymbols(obj)` includes `sym`");
assert.sameValue(syms.length, 1, "The value of `syms.length` is `1`");


