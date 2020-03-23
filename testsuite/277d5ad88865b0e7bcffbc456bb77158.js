load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.2.3.2
description: >
    Assignment of function `name` attribute (previously-bound function)
info: >
    12. Let targetName be Get(Target, "name").
    13. ReturnIfAbrupt(targetName).
    14. If Type(targetName) is not String, let targetName be the empty string.
    15. Perform SetFunctionName(F, targetName, "bound").
includes: [propertyHelper.js]
---*/

var target = Object.defineProperty(function() {}, 'name', { value: 'target' });

assert.sameValue(target.bind().bind().name, 'bound bound target');
verifyNotEnumerable(target.bind().bind(), 'name');
verifyNotWritable(target.bind().bind(), 'name');
verifyConfigurable(target.bind().bind(), 'name');
