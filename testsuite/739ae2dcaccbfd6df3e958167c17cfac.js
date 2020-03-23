load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the hasOwnProperty method is 1
es5id: 15.2.4.5_A11
description: Checking the Object.prototype.hasOwnProperty.length
---*/

//CHECK#1
if (!(Object.prototype.hasOwnProperty.hasOwnProperty("length"))) {
  $ERROR('#1: The length property of the toObject method is 1');
}

//CHECK#2
if (Object.prototype.hasOwnProperty.length !== 1) {
  $ERROR('#2: The length property of the toObject method is 1');
}
