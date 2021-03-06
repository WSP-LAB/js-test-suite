load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T6
description: Checking by using eval, Call String(eval());
---*/

var __str = String(eval());

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(eval()); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "undefined") {
  $ERROR('#2: __str = String(eval()); __str === "undefined". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////
