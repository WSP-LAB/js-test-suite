load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-exsting-var-no-init.case
// - src/annex-b-fns/global/block.template
/*---
description: Existing variable binding is not modified (Block statement in the global scope containing a function declaration)
esid: sec-web-compat-globaldeclarationinstantiation
es6id: B.3.3.2
flags: [generated, noStrict]
info: |
    B.3.3.2 Changes to GlobalDeclarationInstantiation

    [...]
    b. If declaredFunctionOrVarNames does not contain F, then
       i. Perform ? envRec.CreateGlobalFunctionBinding(F, undefined, false).
       ii. Append F to declaredFunctionOrVarNames.
    [...]
---*/
var f = 123;
assert.sameValue(f, 123);

{
  function f() {  }
}
