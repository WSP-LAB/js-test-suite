load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4
description: >
    Symbol ToObject auto-boxing
flags: [onlyStrict]
---*/

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym.a = 0;
});

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym['a' + 'b'] = 0;
});

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym[62] = 0;
});
