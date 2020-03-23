load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T5
description: Call toLocaleLowerCase() function for function call
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLocaleLowerCase() !== "gnulluna") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLocaleLowerCase() === "gnulluna". Actual: '+function(){return "GnulLuNa"}().toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
