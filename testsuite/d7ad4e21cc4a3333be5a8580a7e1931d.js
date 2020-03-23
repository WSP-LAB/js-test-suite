load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.9.1_A2.4_T3
description: Checking with undeclarated variables
---*/

//CHECK#1
try {
  x == (x = 1);
  $ERROR('#1.1: x == (x = 1) throw ReferenceError. Actual: ' + (x == (x = 1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x == (x = 1) throw ReferenceError. Actual: ' + (e));  
  }
}
