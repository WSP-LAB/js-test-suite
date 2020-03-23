load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-init.case
// - src/annex-b-fns/eval-global/direct-if-decl-no-else.template
/*---
description: Variable binding is initialized to `undefined` in outer scope (IfStatement without an else clause in eval code)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
es6id: B.3.4
flags: [generated, noStrict]
includes: [fnGlobalObject.js, propertyHelper.js]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    i. If varEnvRec is a global Environment Record, then
       i. Perform ? varEnvRec.CreateGlobalFunctionBinding(F, undefined, true).
    [...]

---*/

eval(
  'var global = fnGlobalObject();\
  assert.sameValue(f, undefined, "binding is initialized to `undefined`");\
  \
  verifyEnumerable(global, "f");\
  verifyWritable(global, "f");\
  verifyConfigurable(global, "f");\
if (true) function f() {  }'
);
