load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.charcodeat
es6id: 21.1.3.2
description: Coercion of "pos" string value into number
info: |
  [...]
  3. Let position be ? ToInteger(pos).
  [...]

  7.1.4 ToInteger

  1. Let number be ? ToNumber(argument).
---*/

var cCode = 99;

assert.sameValue('abcd'.charCodeAt('   +00200.0000E-0002   '), cCode);
