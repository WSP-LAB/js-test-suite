load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-init-order.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: Initializer values should be assigned in left-to-right order. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var x = 0;
var a, b;

var result;
var vals = [];

result = [ a = x += 1, b = x *= 2 ] = vals;

assert.sameValue(a, 1);
assert.sameValue(b, 2);
assert.sameValue(x, 2);

assert.sameValue(result, vals);
