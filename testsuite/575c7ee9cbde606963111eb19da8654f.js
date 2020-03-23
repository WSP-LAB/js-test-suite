load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arraybuffer-length
description: >
  Throws a TypeError if length is a symbol
info: |
  ArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  ...
features: [Symbol]
---*/

var s = Symbol();

assert.throws(TypeError, function() {
  new ArrayBuffer(s);
}, "`length` parameter is a Symbol");
