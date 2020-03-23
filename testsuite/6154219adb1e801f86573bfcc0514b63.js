load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Throws a TypeError if NewTarget is undefined.
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
---*/

var obj = {
  valueOf: function() {
    throw new Test262Error("NewTarget should be verified before byteOffset");
  }
};

var buffer = new ArrayBuffer(1);

assert.throws(TypeError, function() {
  DataView(buffer, obj);
});
