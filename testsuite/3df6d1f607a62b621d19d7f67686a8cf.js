load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T2
description: Argument is function call, and instance is Boolean
---*/

var __instance = new Boolean;

__instance.search = String.prototype.search;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.search(function(){return false;}()) !== 0) {
  $ERROR('#1: __instance = new Boolean; __instance.search = String.prototype.search;  __instance.search(function(){return false;}()) === 0. Actual: '+__instance.search(function(){return false;}()) );
}
//
//////////////////////////////////////////////////////////////////////////////
