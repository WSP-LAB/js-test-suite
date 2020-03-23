load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions declared as methods cannot be used as constructors.
es6id: 14.4.13
features: [generators]
---*/

var method = { *method() {} }.method;

assert.throws(TypeError, function() {
  var instance = new method();
});
