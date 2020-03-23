load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string-constructor
es6id: 21.1.1
description: Symbol value may not be wrapped
info: |
    1. If no arguments were passed to this function invocation, let s be "".
    2. Else,
       a. If NewTarget is undefined and Type(value) is Symbol, return
          SymbolDescriptiveString(value).
       b. Let s be ? ToString(value).
features: [Symbol]
---*/

var s = Symbol('66');

assert.throws(TypeError, function() {
  new String(s);
});
