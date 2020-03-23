load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Array.prototype.splice sets `length` on `this`
es5id: 15.4.4.12_A6.1_T2
description: Array.prototype.splice throws if `length` is read-only
---*/

var a = [0, 1, 2];

Object.defineProperty(a, 'length', {
    writable: false
});

assert.throws(TypeError, function() {
  a.splice(1, 2, 4);
});
