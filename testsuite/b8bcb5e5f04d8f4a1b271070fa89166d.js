load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-performeval
es5id: 10.4.2.1-4-s
description: >
    Strict Mode - Strict mode eval code cannot instantiate functions
    in the variable environment of the caller to eval.
---*/

var typeofInside;

(function() {
  (0,eval)("'use strict'; function fun(){}");
  typeofInside = typeof fun;
}());

assert.sameValue(typeofInside, "undefined");
assert.sameValue(typeof fun, "undefined");
