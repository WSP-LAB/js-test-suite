load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.includes
description: get array-like indexed properties
info: |
  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  7. Repeat, while k < len
    a. Let elementK be the result of ? Get(O, ! ToString(k)).
  ...
includes: [compareArray.js]
features: [Proxy]
---*/

var calls;

var obj = {};

var p = new Proxy(obj, {
  get: function(_, key) {
    calls.push(key);

    if (key === "length") {
      return 4;
    }

    return key * 10;
  }
});

calls = [];
assert.sameValue([].includes.call(p, 42), false);
assert(
  compareArray(calls, ["length", "0", "1", "2", "3"]),
  "loops through all indexes"
);

calls = [];
assert.sameValue([].includes.call(p, 10), true, "uses the returned value");
assert(compareArray(calls, ["length", "0", "1"]), "loops until value is found");
