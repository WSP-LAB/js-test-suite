load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T7
description: Call toLocaleUpperCase() function of NaN
---*/

Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLocaleUpperCase()!== "NAN") {
  $ERROR('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; NaN.toLocaleUpperCase()=== "NAN". Actual: '+NaN.toLocaleUpperCase());
}
//
//////////////////////////////////////////////////////////////////////////////
