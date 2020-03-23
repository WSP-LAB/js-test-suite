load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Function prototype object is itself a Function object without
    [[Construct]] property
es5id: 15.3.4_A5
description: Checking if creating "new Function.prototype object" fails
---*/

assert.throws(TypeError, function() {
  new Function.prototype;
});
