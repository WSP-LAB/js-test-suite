load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.6_A2.4_T3
description: Checking with undeclarated variables
---*/

//CHECK#1
try {
  object instanceof (object = {}, Object);
  $ERROR('#1.1: object instanceof (object = {}, Object) throw ReferenceError. Actual: ' + (object instanceof (object = {}, Object)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: object instanceof (object = {}, Object) throw ReferenceError. Actual: ' + (e));  
  }
}
