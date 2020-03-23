load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.2.2
description: >
  Set[Symbol.species] accessor property get name
info: >
  23.2.2.2 get Set [ @@species ]

  ...
  The value of the name property of this function is "get [Symbol.species]".
features: [Symbol.species]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Set, Symbol.species);

assert.sameValue(
  descriptor.get.name,
  'get [Symbol.species]'
);
