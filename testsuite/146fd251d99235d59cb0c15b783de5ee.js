load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.4.13
description: >
    Assignment of function `name` attribute (GeneratorMethod)
info: >
    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    [...]
    9. Perform SetFunctionName(closure, propKey).
includes: [propertyHelper.js]
features: [generators, Symbol]
---*/

var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;

o = {
  *id() {},
  *[anonSym]() {},
  *[namedSym]() {}
};

assert.sameValue(o.id.name, 'id', 'via IdentifierName');
verifyNotEnumerable(o.id, 'name');
verifyNotWritable(o.id, 'name');
verifyConfigurable(o.id, 'name');

assert.sameValue(o[anonSym].name, '', 'via anonymous Symbol');
verifyNotEnumerable(o[anonSym], 'name');
verifyNotWritable(o[anonSym], 'name');
verifyConfigurable(o[anonSym], 'name');

assert.sameValue(o[namedSym].name, '[test262]', 'via Symbol');
verifyNotEnumerable(o[namedSym], 'name');
verifyNotWritable(o[namedSym], 'name');
verifyConfigurable(o[namedSym], 'name');
