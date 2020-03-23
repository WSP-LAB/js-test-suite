load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions
es6id: 14.4
description: >
  YieldExpression operand may not include the `in` keyword in contexts where it
  is disallowed
info: |
  Syntax

  yield [no LineTerminator here] * AssignmentExpression[?In, +Yield]
negative:
  phase: early
  type: SyntaxError
---*/

function* g() {
  for (yield * '' in {}; ; ) ;
}
