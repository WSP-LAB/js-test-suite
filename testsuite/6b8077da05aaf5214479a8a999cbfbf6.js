load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class strict mode
---*/
var D = class extends function() {
  arguments.callee;
} {};
assert.throws(TypeError, function() {
  Object.getPrototypeOf(D).arguments;
});
assert.throws(TypeError, function() {
  new D;
});
