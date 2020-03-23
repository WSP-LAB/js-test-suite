load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-method-definitions-static-semantics-early-errors
description: >
  A SyntaxError is thrown if a setter method contains a non-simple parameter list and a UseStrict directive.
info: >
  Static Semantics: Early Errors

  It is a Syntax Error if ContainsUseStrict of FunctionBody is true and IsSimpleParameterList of PropertySetParameterList is false.
negative:
  phase: early
  type: SyntaxError
---*/

var o = {
  set m(a = 0) {
    "use strict";
  }
};
