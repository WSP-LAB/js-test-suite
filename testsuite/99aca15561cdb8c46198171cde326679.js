load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-conditional-operator
es6id: 12.13
description: >
  The second AssignmentExpression cannot include the `in` keyword in contexts
  where it is disallowed.
info: |
  Syntax

  ConditionalExpression[In, Yield] :
    LogicalORExpression[?In, ?Yield]
    LogicalORExpression[?In, ?Yield] ? AssignmentExpression[+In, ?Yield] : AssignmentExpression[?In, ?Yield]
negative:
  phase: early
  type: SyntaxError
---*/

for (true ? 0 : 0 in {}; false; ) ;
