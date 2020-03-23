load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions that throw instances of the specified native Error constructor
    satisfy the assertion.
---*/

assert.throws(Error, function() {
  throw new Error();
});

assert.throws(EvalError, function() {
  throw new EvalError();
});

assert.throws(RangeError, function() {
  throw new RangeError();
});

assert.throws(ReferenceError, function() {
  throw new ReferenceError();
});

assert.throws(SyntaxError, function() {
  throw new SyntaxError();
});

assert.throws(TypeError, function() {
  throw new TypeError();
});

assert.throws(URIError, function() {
  throw new URIError();
});
