load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-exsting-block-fn-no-init.case
// - src/annex-b-fns/eval-global/direct-switch-dflt.template
/*---
description: Does not re-initialize binding created by similar forms (Funtion declaration in the `default` clause of a `switch` statement in eval code in the global scope)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    a. If declaredFunctionOrVarNames does not contain F, then
    [...]
---*/

eval(
  'assert.sameValue(f, undefined);\
  \
  {\
    function f() {}\
  }switch (1) {' +
  '  default:' +
  '    function f() {  }' +
  '}\
  '
);
