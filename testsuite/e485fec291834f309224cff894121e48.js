load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Mutable bindings are initialized in the lexical environment record prior to
    execution for variable declarations
esid: sec-moduledeclarationinstantiation
info: |
    [...]
    13. Let varDeclarations be the VarScopedDeclarations of code.
    14. Let declaredVarNames be a new empty List.
    15. For each element d in varDeclarations do
        a. For each element dn of the BoundNames of d do
           i. If dn is not an element of declaredVarNames, then
              1. Perform ! envRec.CreateMutableBinding(dn, false).
              2. Call envRec.InitializeBinding(dn, undefined).
              3. Append dn to declaredVarNames.
    [...]
includes: [fnGlobalObject.js]
flags: [module]
---*/

var global = fnGlobalObject();

assert.sameValue(test262, undefined, 'value is initialized to `undefined`');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);

var test262 = null;

assert.sameValue(test262, null, 'binding is mutable');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'),
  undefined,
  'global binding is not effected by evaluation of declaration'
);
