load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-globaldeclarationinstantiation
es6id: 15.1.8
description: Lexical declarations "shadow" configurable global properties
info: |
  [...]
  5. For each name in lexNames, do
     [...]
     c. Let hasRestrictedGlobal be ? envRec.HasRestrictedGlobalProperty(name).
     d. If hasRestrictedGlobal is true, throw a SyntaxError exception.
  [...]
  16. For each element d in lexDeclarations do
      a. NOTE Lexically declared names are only instantiated here but not
         initialized.
      b. For each element dn of the BoundNames of d do
         i. If IsConstantDeclaration of d is true, then
            1. Perform ? envRec.CreateImmutableBinding(dn, true).
         ii. Else,
             1. Perform ? envRec.CreateMutableBinding(dn, false).
includes: [propertyHelper.js]
---*/

let Array;

assert.sameValue(Array, undefined);

assert.sameValue(typeof this.Array, 'function');
verifyNotEnumerable(this, 'Array');
verifyWritable(this, 'Array');
verifyConfigurable(this, 'Array');