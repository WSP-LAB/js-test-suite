load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions declared as methods are assigned a `name` property
    according to the string value of their property name.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/

var method = { *method() {} }.method;

assert.sameValue(method.name, 'method');
verifyNotEnumerable(method, 'name');
verifyNotWritable(method, 'name');
verifyConfigurable(method, 'name');
