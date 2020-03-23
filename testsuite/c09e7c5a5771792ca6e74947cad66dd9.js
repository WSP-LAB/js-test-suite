load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function-calls-runtime-semantics-evaluation
es6id: 12.3.4.1
description: Value when invoked via CallExpression
info: |
  CallExpression : MemberExpressionArguments

  [...]
  8. Return ? EvaluateDirectCall(func, thisValue, Arguments, tailCall).
---*/

var newTarget = null;

function f() {
  newTarget = new.target;
}

f();

assert.sameValue(newTarget, undefined);
