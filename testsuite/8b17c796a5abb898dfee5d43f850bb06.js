load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-4
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: break (break)
negative:
  phase: early
  type: SyntaxError
---*/

var \u0062\u0072\u0065\u0061\u006b = 123;;
