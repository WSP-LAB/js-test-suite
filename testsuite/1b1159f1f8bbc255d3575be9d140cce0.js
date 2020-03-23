load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.10
description: >
    Set.prototype.values ( )

    ...
    2. Return CreateSetIterator(S, "value").


    23.2.5.1 CreateSetIterator Abstract Operation

    1. If Type(set) is not Object, throw a TypeError exception.
    ...
---*/

assert.throws(TypeError, function() {
  Set.prototype.values.call(0);
});

assert.throws(TypeError, function() {
  var s = new Set();
  s.values.call(0);
});
