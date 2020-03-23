load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all should throw if 'this' does not conform to Promise constructor
es6id: S25.4.4.1_A4.1_T1
description: this must conform to Promise constructor in Promise.all
author: Sam Mikes
---*/

function ZeroArgConstructor() {
}

assert.throws(TypeError, function() {
  Promise.all.call(ZeroArgConstructor, []);
});
