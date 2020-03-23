load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of the String
    constructor is the Function prototype object
es5id: 15.5.3_A2_T1
description: Checking Function.prototype.isPrototypeOf(String)
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#
if (!(Function.prototype.isPrototypeOf(String))) {
  $ERROR('#1: Function.prototype.isPrototypeOf(String) return true. Actual: '+Function.prototype.isPrototypeOf(String));
}
//
//////////////////////////////////////////////////////////////////////////////
