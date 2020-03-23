load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.5
description: >
  Returns undefined.
info: >
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  ...
  8. Return undefined.
---*/

var map = new Map();

var result = map.forEach(function() {
  return true;
});

assert.sameValue(result, undefined, 'Empty map#forEach returns undefined');

map.set(1, 1);
result = map.forEach(function() {
  return true;
});

assert.sameValue(result, undefined, 'map#forEach returns undefined');
