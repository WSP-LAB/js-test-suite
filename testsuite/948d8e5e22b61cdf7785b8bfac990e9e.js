load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of the Boolean
    prototype object is the Object prototype object
es5id: 15.6.4_A2
description: Checking Object.prototype.isPrototypeOf(Boolean.prototype)
---*/

//CHECK#1
if (!Object.prototype.isPrototypeOf(Boolean.prototype)) {
  $ERROR('#1: Object prototype object is the prototype of Boolean prototype object');
}
