load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-evaldeclarationinstantiation
description: Initialization of new global property
info: |
    [...]
    16. For each String vn in declaredVarNames, in list order do
        a. If varEnvRec is a global Environment Record, then
           i. Perform ? varEnvRec.CreateGlobalVarBinding(vn, true).
    [...]

    8.1.1.4.17 CreateGlobalVarBinding

    [...]
    5. Let extensible be ? IsExtensible(globalObject).
    6. If hasProperty is false and extensible is true, then
       a. Perform ? ObjRec.CreateMutableBinding(N, D).
       b. Perform ? ObjRec.InitializeBinding(N, undefined).
    [...]
includes: [propertyHelper.js]
---*/

var initial = null;

(0, eval)('initial = x; var x = 9;');

verifyEnumerable(this, 'x');
verifyWritable(this, 'x');
verifyConfigurable(this, 'x');

assert.sameValue(initial, undefined);
