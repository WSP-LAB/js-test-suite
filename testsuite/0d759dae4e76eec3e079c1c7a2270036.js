load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toString() returns this string value
es5id: 15.5.4.2_A1_T2
description: Create new String(boolean) and check it`s method toString()
---*/

var __string__obj = new String(true);

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.toString() !== ""+true) {
  $ERROR('#1: __string__obj = new String(true); __string__obj.toString() === ""+true. Actual: __string__obj.toString() ==='+__string__obj.toString() ); 
}
//
//////////////////////////////////////////////////////////////////////////////