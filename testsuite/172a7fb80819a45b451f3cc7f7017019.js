load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-postfix-expressions-static-semantics-early-errors
es6id: 12.4.1
description: Applied to a "covered" YieldExpression
info: |
  PostfixExpression :
    LeftHandSideExpression ++
    LeftHandSideExpression --

  - It is an early Reference Error if IsValidSimpleAssignmentTarget of
    LeftHandSideExpression is false.

  12.15.3 Static Semantics: IsValidSimpleAssignmentTarget

  AssignmentExpression:
    YieldExpression
    ArrowFunction
    LeftHandSideExpression = AssignmentExpression
    LeftHandSideExpression AssignmentOperator AssignmentExpression

  1. Return false.
features: [generators]
negative:
  phase: early
  type: ReferenceError
---*/

function* g() {
  (yield)++;
}
