load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.touppercase
es6id: 21.1.3.24
description: The "this" value must be object-coercible
info: |
  This function behaves in exactly the same way as
  String.prototype.toLowerCase, except that code points are mapped to their
  uppercase equivalents as specified in the Unicode Character Database.

  21.1.3.24 String.prototype.toLowerCase

  1. Let O be ? RequireObjectCoercible(this value).
---*/

var toUpperCase = String.prototype.toUpperCase;

assert.sameValue(typeof toUpperCase, 'function');

assert.throws(TypeError, function() {
  toUpperCase.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  toUpperCase.call(null);
}, 'null');
