load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions
es6id: 14.4
description: >
  YieldExpression cannot be used within the FormalParameters of a generator
  function
info: |
  GeneratorExpression :

    function * BindingIdentifier[Yield]opt ( FormalParameters[Yield] ) { GeneratorBody }

  YieldExpression cannot be used within the FormalParameters of a generator
  function because any expressions that are part of FormalParameters are
  evaluated before the resulting generator object is in a resumable state.
features: [default-parameters]
negative:
  phase: early
  type: SyntaxError
---*/

0, function*(x = yield) {};
