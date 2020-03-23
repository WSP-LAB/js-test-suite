load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions declared as methods do not define a `prototype` property.
es6id: 14.3.9
---*/

var method = { method() {} }.method;

assert.sameValue(Object.hasOwnProperty.call(method, 'prototype'), false);
