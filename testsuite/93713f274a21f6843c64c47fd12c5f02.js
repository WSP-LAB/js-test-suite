load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.lastIndexOf(searchString, position)
es5id: 15.5.4.8_A1_T5
description: >
    Call lastIndexOf(searchString, position) function with null
    argument of function object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" lastIndexOf(null) evaluates to lastIndexOf("",0)
if (function(){return "gnullunazzgnull"}().lastIndexOf(null) !== 11) {
  $ERROR('#1: function(){return "gnullunazzgnull"}().lastIndexOf(null) === 11. Actual: '+function(){return "gnullunazzgnull"}().lastIndexOf(null) );
}
//
//////////////////////////////////////////////////////////////////////////////
