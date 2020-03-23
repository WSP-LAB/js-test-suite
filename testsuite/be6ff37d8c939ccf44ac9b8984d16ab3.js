load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of Array is 1
es5id: 15.4.3_A2.4
description: Array.length === 1
---*/

//CHECK#1
if (Array.length !== 1) {
  $ERROR('#1: Array.length === 1. Actual: ' + (Array.length));
}
