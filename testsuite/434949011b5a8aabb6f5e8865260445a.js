load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.charAt(pos)
es5id: 15.5.4.4_A1_T8
description: Call charAt() function with void 0 argument of string object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(void 0) evaluates to 0 charAt() evaluates to charAt(0)
if (String(42).charAt(void 0) !== "4") {
  $ERROR('#1: String(42).charAt(void 0) === "4". Actual: String(42).charAt(void 0) ==='+String(42).charAt(void 0) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
