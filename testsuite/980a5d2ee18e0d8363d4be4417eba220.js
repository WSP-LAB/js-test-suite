load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Assignment of function `name` attribute
es6id: 14.4.12
info: >
    GeneratorDeclaration :
        function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

    [...]
    6. Perform SetFunctionName(F, name).
includes: [propertyHelper.js]
---*/

function* g() {}

assert.sameValue(g.name, 'g');
verifyNotEnumerable(g, 'name');
verifyNotWritable(g, 'name');
verifyConfigurable(g, 'name');
