load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x = y PutValue(x, y)
es5id: 11.13.1_A3.1
description: Checking Expression and Variable statements
---*/

//CHECK#1
var x = 1;
if (x !== 1) {
  $ERROR('#1: var x = 1; x === 1. Actual: ' + (x));
}

//CHECK#2
x = 1;
if (x !== 1) {
  $ERROR('#2: x = 1; x === 1. Actual: ' + (x));
}
