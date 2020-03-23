load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.5-2-2gs
description: >
    Strict Mode - SyntaxError is throw if the UnaryExpression operated
    upon by a Prefix Decrement operator(--arguments)
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

--arguments;
