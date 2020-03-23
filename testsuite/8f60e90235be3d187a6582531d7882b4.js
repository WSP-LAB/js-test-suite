load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: B.3.3
description: >
    redeclaration within block:
    attempt to redeclare function declaration with let
negative:
  phase: early
  type: SyntaxError
---*/
{ function f() {} let f; }
