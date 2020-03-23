load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Let 'x' be the return value from getPrototypeOf when called on d.
    Then, x.isPrototypeOf(d) must be true.
es5id: 15.2.3.2-2-2
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (custom object)
---*/

  function base() {}

  function derived() {}
  derived.prototype = new base();

  var d = new derived();
  var x = Object.getPrototypeOf(d);

assert.sameValue(x.isPrototypeOf(d), true, 'x.isPrototypeOf(d)');
