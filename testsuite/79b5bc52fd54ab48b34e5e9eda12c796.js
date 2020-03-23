load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-34
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: const (const)
negative:
  phase: early
  type: SyntaxError
---*/

var co\u006est = 123;
