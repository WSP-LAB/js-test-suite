load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class strict mode
---*/
var D = class extends function() {
  arguments.caller;
} {};
assert.throws(TypeError, function() {
  Object.getPrototypeOf(D).arguments;
});
assert.throws(TypeError, function() {
  new D;
});
