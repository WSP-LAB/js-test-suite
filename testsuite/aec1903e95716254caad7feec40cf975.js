load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
es6id: 13.3.1.4
description: Returns an empty completion
info: |
  LexicalDeclaration : LetOrConst BindingList ;

  1. Let next be the result of evaluating BindingList.
  2. ReturnIfAbrupt(next).
  3. Return NormalCompletion(empty).
---*/

assert.sameValue(
  eval('const test262id1 = 1;'), undefined, 'Single declaration'
);
assert.sameValue(
  eval('const test262id2 = 2, test262id3 = 3;'),
  undefined,
  'Multiple declarations'
);

assert.sameValue(eval('4; const test262id5 = 5;'), 4);
assert.sameValue(eval('6; let test262id7 = 7, test262id8 = 8;'), 6);
