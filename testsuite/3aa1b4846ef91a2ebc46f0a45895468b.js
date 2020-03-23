load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-init.case
// - src/annex-b-fns/eval-global/indirect-block.template
/*---
description: Variable binding is initialized to `undefined` in outer scope (Block statement in eval code containing a function declaration)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
includes: [fnGlobalObject.js, propertyHelper.js]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    i. If varEnvRec is a global Environment Record, then
       i. Perform ? varEnvRec.CreateGlobalFunctionBinding(F, undefined, true).
    [...]

---*/

(0,eval)(
  'var global = fnGlobalObject();\
  assert.sameValue(f, undefined, "binding is initialized to `undefined`");\
  \
  verifyEnumerable(global, "f");\
  verifyWritable(global, "f");\
  verifyConfigurable(global, "f");\
{ function f() {  } }'
);
