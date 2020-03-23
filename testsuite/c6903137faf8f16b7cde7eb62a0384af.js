load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T8
description: >
    Call indexOf(searchString, position) function with void 0 argument
    of string object
---*/

var __obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(void 0) evaluates to "undefined" indexOf(void 0) evaluates to indexOf("undefined")
if (String(__obj).indexOf(void 0) !== 0) {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).indexOf(void 0) === 0. Actual: '+String(__obj).indexOf(void 0) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
