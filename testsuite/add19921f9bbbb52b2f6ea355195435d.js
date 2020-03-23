load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function-definitions
es6id: 14.1
description: >
  The `yield` token is interpreted as an IdentifierReference within a generator
  and outside of strict mode
info: |
  FunctionDeclaration[Yield, Default] :
    function BindingIdentifier[?Yield] ( FormalParameters ) { FunctionBody }
features: [generators, default-parameters]
flags: [noStrict]
---*/

var yield = 23;
var paramValue;

function *g() {
  function f(x = yield) {
    paramValue = x;
  }

  f();
}

g().next();

assert.sameValue(paramValue, 23);
