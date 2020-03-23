load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-scripts
es6id: 15.1
description: >
  The `yield` token is interpreted as an Identifier when it appears in global
  code (strict mode)
info: |
  Syntax

  Script :
    ScriptBodyopt

  ScriptBody :
    StatementList[~Yield, ~Return]
flags: [onlyStrict]
negative:
  phase: early
  type: SyntaxError
---*/

yield;
