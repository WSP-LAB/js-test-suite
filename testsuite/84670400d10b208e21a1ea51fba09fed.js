load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: Error creating iterator object
info: >
    [...]
    6. If usingIterator is not undefined, then
       [...]
       d. Let iterator be GetIterator(items, usingIterator).
       e. ReturnIfAbrupt(iterator).
features: [Symbol.iterator]
---*/

var items = {};
items[Symbol.iterator] = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  Array.from(items);
});
