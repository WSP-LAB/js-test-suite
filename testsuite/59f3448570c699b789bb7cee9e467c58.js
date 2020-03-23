load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator instances directly inherit properties from the object that is the
    value of the prototype property of the Generator function that created the
    instance.
es6id: 25.3
---*/

function* g() {}

assert.sameValue(
  Object.getPrototypeOf(g()),
  g.prototype,
  'Instance created via function invocation'
);
