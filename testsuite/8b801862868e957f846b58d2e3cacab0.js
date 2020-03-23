load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.reject
es6id: S25.4.4.4_A3.1_T1
author: Sam Mikes
description: Promise.reject throws TypeError for bad 'this'
---*/

function ZeroArgConstructor() {
}

assert.throws(TypeError, function() {
  Promise.reject.call(ZeroArgConstructor, 4);
});
