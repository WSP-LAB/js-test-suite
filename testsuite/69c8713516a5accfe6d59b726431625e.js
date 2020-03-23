load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-exsting-global-init.case
// - src/annex-b-fns/eval-global/indirect-switch-case.template
/*---
description: Variable binding is set to `undefined` (Function declaration in the `case` clause of a `switch` statement in eval code)
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

    8.1.1.4.18 CreateGlobalFunctionBinding

    [...]
    5. If existingProp is undefined or existingProp.[[Configurable]] is true,
       then
       [...]
    6. Else,
       a. Let desc be the PropertyDescriptor{[[Value]]: V }.
    [...]

---*/
Object.defineProperty(fnGlobalObject(), 'f', {
  value: 'x',
  enumerable: true,
  writable: true,
  configurable: false
});

(0,eval)(
  'var global = fnGlobalObject();\
  assert.sameValue(f, undefined, "binding is initialized to `undefined`");\
  \
  verifyEnumerable(global, "f");\
  verifyWritable(global, "f");\
  verifyNotConfigurable(global, "f");switch (1) {' +
  '  case 1:' +
  '    function f() {  }' +
  '}\
  '
);
