load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function-definitions-runtime-semantics-iteratorbindinginitialization
description: >
    Creation of new variable environment for the BindingRestElement formal
    parameter
info: |
    [...]
    2. Let currentContext be the running execution context.
    3. Let originalEnv be the VariableEnvironment of currentContext.
    4. Assert: The VariableEnvironment and LexicalEnvironment of currentContext
       are the same.
    5. Assert: environment and originalEnv are the same.
    6. Let paramVarEnv be NewDeclarativeEnvironment(originalEnv).
    7. Set the VariableEnvironment of currentContext to paramVarEnv.
    8. Set the LexicalEnvironment of currentContext to paramVarEnv.
    9. Let result be the result of performing IteratorBindingInitialization for
      BindingRestElement using iteratorRecord and environment as the arguments.
    10. Set the VariableEnvironment of currentContext to originalEnv.
    11. Set the LexicalEnvironment of currentContext to originalEnv.
    [...]
flags: [noStrict]
---*/

var x = 'outside';
var probe1, probe2;

(function(
    _ = probe1 = function() { return x; },
    ...[__ = (eval('var x = "inside";'), probe2 = function() { return x; })]
  ) {
}());

assert.sameValue(probe1(), 'outside');
assert.sameValue(probe2(), 'inside');
