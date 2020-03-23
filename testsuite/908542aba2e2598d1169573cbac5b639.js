load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5.14
description: >
    In a class, computed property names for static
    setters that are named "prototype" throw a TypeError
---*/

assert.throws(TypeError, function() {
  class C {
    static set ['prototype'](x) {}
  }
});
