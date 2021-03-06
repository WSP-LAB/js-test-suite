load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-rest-not-final-id.case
// - src/dstr-binding/default/try.template
/*---
description: Rest element (identifier) may not be followed by any element (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
es6id: 13.15.7
features: [destructuring-binding]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    13.3.3 Destructuring Binding Patterns
    ArrayBindingPattern[Yield] :
        [ Elisionopt BindingRestElement[?Yield]opt ]
        [ BindingElementList[?Yield] ]
        [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]
---*/

var ranCatch = false;

try {
  throw [1, 2, 3];
} catch ([...x, y]) {
  
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
