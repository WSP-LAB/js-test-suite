load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-scripts
es6id: 15.1
description: >
  The `yield` token is interpreted as an Identifier when it appears in global
  code (non-strict mode)
info: |
  Syntax

  Script :
    ScriptBodyopt

  ScriptBody :
    StatementList[~Yield, ~Return]
flags: [noStrict]
---*/

// Avoid test failures in cases where the host has defined a `yield` property
// on the global object.
try {
  yield = 0;
} catch (_) {}
