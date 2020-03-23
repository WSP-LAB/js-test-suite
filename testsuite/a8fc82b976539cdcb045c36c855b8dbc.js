load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.substring (start, end)
es5id: 15.5.4.15_A1_T14
description: Used one argument, that is function(){}(). Instance is string
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("report".substring(function(){}()) !== "report") {
  $ERROR('#1: "report".substring(function(){}()) === "report". Actual: '+"report".substring(function(){}()) );
}
//
//////////////////////////////////////////////////////////////////////////////
