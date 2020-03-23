load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property names can be used as the name of a generator method in an object
includes: [compareArray.js]
---*/
var object = {
  *['a']() {
    yield 1;
    yield 2;
  }
};
assert(
  compareArray(Object.keys(object), ['a']),
  "`compareArray(Object.keys(object), ['a'])` returns `true`"
);
