load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of
    the Array prototype object is the Object prototype object
es5id: 15.4.4_A1.1_T3
description: Checking use isPrototypeOf
---*/

//CHECK#1
if (Object.prototype.isPrototypeOf(Array.prototype) !== true) {
  $ERROR('#1: Object.prototype.isPrototypeOf(Array.prototype) === true. Actual: ' + (Object.prototype.isPrototypeOf(Array.prototype)));
}
