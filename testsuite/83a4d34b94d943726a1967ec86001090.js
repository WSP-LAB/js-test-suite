load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then throws TypeError if Get(promise, "constructor") throws
    Ref 25.4.5.3 step 4 ReturnIfAbrupt(C)
es6id: S25.4.5.3_A3.1_T1
author: Sam Mikes
description: Promise.prototype.then throws if Get(promise, "constructor") throws
---*/

var p = Promise.resolve("foo");

Object.defineProperty(p, "constructor", {
    get: function () {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
  p.then(function() {
    $ERROR("Should never be called.");
  }, function() {
    $ERROR("Should never be called.");
  });
});
