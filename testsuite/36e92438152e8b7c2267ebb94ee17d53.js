load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.5
description: >
    Frozen object contains symbol properties.
flags: [onlyStrict]
---*/
var sym = Symbol("66");
var obj = {};
obj[sym] = 1;
Object.freeze(obj);

assert.throws(TypeError, function() {
  obj[sym] = 2;
});
