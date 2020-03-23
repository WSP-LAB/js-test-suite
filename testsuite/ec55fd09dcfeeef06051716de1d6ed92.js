load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function-definitions-runtime-semantics-iteratorbindinginitialization
description: If a property initializer contains a direct eval call, a new declarative environment is created.
info: >
  Runtime Semantics: IteratorBindingInitialization

  FormalParameter : BindingElement

  ...
  2. Let currentContext be the running execution context.
  3. Let originalEnv be the VariableEnvironment of currentContext.
  4. Assert: The VariableEnvironment and LexicalEnvironment of currentContext are the same.
  5. Assert: environment and originalEnv are the same.
  6. Let paramVarEnv be NewDeclarativeEnvironment(originalEnv).
  ...
---*/

var x = "outer";

function evalInPropertyInitializer({a: ignored = eval("var x = 'inner'")}) {
  assert.sameValue(x, "outer");
}
evalInPropertyInitializer({});
