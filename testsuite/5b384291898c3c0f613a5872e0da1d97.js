load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: Setting property on result value (traversed via iterator)
info: >
    [...]
    6. If usingIterator is not undefined, then
       [...]
       g. Repeat
          [...]
          ix. Let defineStatus be CreateDataPropertyOrThrow(A, Pk,
              mappedValue).
features: [Symbol.iterator]
---*/

var items = {};
var firstIterResult = { done: false, value: {} };
var secondIterResult = { done: false, value: {} };
var thirdIterResult = { done: true, value: {} };
var nextIterResult = firstIterResult;
var nextNextIterResult = secondIterResult;
var result;

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextIterResult;

      nextIterResult = nextNextIterResult;
      nextNextIterResult = thirdIterResult;

      return result;
    }
  };
};

result = Array.from(items);

assert.sameValue(result[0], firstIterResult.value);
assert.sameValue(result[1], secondIterResult.value);
