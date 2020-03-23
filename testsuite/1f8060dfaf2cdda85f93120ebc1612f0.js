load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T4
description: Call charCodeAt() function without argument of string object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since Number() evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if ("smart".charCodeAt() !== 0x73) {
  $ERROR('#1: "smart".charCodeAt() === 0x73. Actual: "smart".charCodeAt() ==='+("smart".charCodeAt()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////