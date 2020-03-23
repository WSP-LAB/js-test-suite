load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.apply
es6id: 19.2.3.1
description: Value when invoked via `Function.prototype.apply`
info: |
  [...]
  5. Return ? Call(func, thisArg, argList).
---*/

var newTarget = null;

function f() {
  newTarget = new.target;
}

f.apply({});

assert.sameValue(newTarget, undefined);
