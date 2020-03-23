load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.6
description: >
  Int16Array.prototype is not a TypedArray instance object.
info: >
  A TypedArray prototype object is an ordinary object. It does not have
  a [[ViewedArrayBuffer]] or any other of the internal slots that are
  specific to TypedArray instance objects.
---*/

assert.throws(TypeError, function() {
  Int16Array.prototype.buffer;
});
