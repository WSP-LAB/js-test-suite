load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of the Boolean
    constructor is the Function prototype object
es5id: 15.6.3_A2
description: Checking prototype of the Boolean constructor
---*/

//CHECK#1
if (!(Function.prototype.isPrototypeOf(Boolean))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Boolean constructor is the Function prototype object.');
}
