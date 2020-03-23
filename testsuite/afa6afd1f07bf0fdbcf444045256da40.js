load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.1
description: >
    Symbol constructor
---*/
assert.sameValue(
    Object.getPrototypeOf(Symbol('66')).constructor,
    Symbol,
    "The value of `Object.getPrototypeOf(Symbol('66')).constructor` is `Symbol`"
);
assert.sameValue(
    Object.getPrototypeOf(Object(Symbol('66'))).constructor,
    Symbol,
    "The value of `Object.getPrototypeOf(Object(Symbol('66'))).constructor` is `Symbol`"
);
