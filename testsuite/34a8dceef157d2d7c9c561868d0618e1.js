load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-init.case
// - src/annex-b-fns/global/switch-dflt.template
/*---
description: Variable binding is initialized to `undefined` in outer scope (Funtion declaration in the `default` clause of a `switch` statement in the global scope)
esid: sec-web-compat-globaldeclarationinstantiation
es6id: B.3.3.2
flags: [generated, noStrict]
includes: [fnGlobalObject.js, propertyHelper.js]
info: |
    B.3.3.2 Changes to GlobalDeclarationInstantiation

    [...]
    b. If declaredFunctionOrVarNames does not contain F, then
       i. Perform ? envRec.CreateGlobalFunctionBinding(F, undefined, false).
       ii. Append F to declaredFunctionOrVarNames.
    [...]

---*/
var global = fnGlobalObject();
assert.sameValue(f, undefined, 'binding is initialized to `undefined`');

verifyEnumerable(global, 'f');
verifyWritable(global, 'f');
verifyNotConfigurable(global, 'f');

switch (1) {
  default:
    function f() {  }
}
