load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.6
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    ...
    4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    ...

    Passing `symbol` as callback

---*/

var s = new Set([1]);

assert.throws(TypeError, function() {
  s.forEach(Symbol());
});
