load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `typeof` UnaryExpression
info: >
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `typeof` UnaryExpression
    ...

negative:
  phase: early
  type: SyntaxError
---*/
typeof 1 ** 2;
