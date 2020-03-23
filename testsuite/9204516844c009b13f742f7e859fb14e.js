load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Objects that implement internal method [[Construct]] are called
    constructors. Math object is NOT constructor
es5id: 8.6.2_A7
description: Checking if execution of "var objMath=new Math" passes
---*/

assert.throws(TypeError, function() {
  var objMath=new Math;
});
