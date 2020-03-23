load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T1
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleUpperCase() !== "TRUE") {
  $ERROR('#1: __instance = new Object(true); __instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;  __instance.toLocaleUpperCase() === "TRUE". Actual: '+__instance.toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
