load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then expects a Promise as 'this'
es6id: S25.4.5.3_A2.1_T2
author: Sam Mikes
description: Promise.prototype.then throw if 'this' is non-Promise Object
---*/

function ZeroArgConstructor() {
}

var z = new ZeroArgConstructor();

assert.throws(TypeError, function() {
  Promise.then.call(z, function () {}, function () {});
});
