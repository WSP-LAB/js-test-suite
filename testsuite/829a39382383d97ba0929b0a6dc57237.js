load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.2.1.1
description: Assignment of function `name` attribute
info: >
    [...]
    3. Return CreateDynamicFunction(C, NewTarget, "generator", args).

    ES6 19.2.1.1.1
        RuntimeSemantics: CreateDynamicFunction(constructor, newTarget, kind, args)

    [...]
    29. Perform SetFunctionName(F, "anonymous").
includes: [propertyHelper.js]
---*/

var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

assert.sameValue(GeneratorFunction().name, 'anonymous');
verifyNotEnumerable(GeneratorFunction(), 'name');
verifyNotWritable(GeneratorFunction(), 'name');
verifyConfigurable(GeneratorFunction(), 'name');
