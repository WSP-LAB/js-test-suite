load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of the Function constructor
    is the Function prototype object
es5id: 15.3.3_A2_T2
description: Add new property to Function.prototype and check it
---*/

Function.prototype.indicator = 1;

//CHECK#
if (Function.indicator != 1) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Function constructor is the Function prototype object.');
}
