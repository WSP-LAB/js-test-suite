load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: Error accessing items' `Symbol.iterator` attribute
info: >
    [...]
    4. Let usingIterator be GetMethod(items, @@iterator).
    5. ReturnIfAbrupt(usingIterator).
features: [Symbol.iterator]
---*/

var items = {};
Object.defineProperty(items, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Array.from(items);
});
