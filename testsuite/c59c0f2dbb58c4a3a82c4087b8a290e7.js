load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function-definitions-static-semantics-early-errors
es6id: 14.1.2
description: Body may not contain a "super" property reference
info: >
  It is a Syntax Error if FunctionBody Contains SuperProperty is true.
negative:
  phase: early
  type: SyntaxError
---*/

0, function() {
  super.x;
};
