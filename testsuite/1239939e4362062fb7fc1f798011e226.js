load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T6
description: >
    Call indexOf(searchString, position) function with x argument of
    new String object, where x is undefined variable
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "" indexOf(undefined) evaluates to indexOf("",0)
if (new String("undefined").indexOf(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").indexOf(x) === 0. Actual: '+new String("undefined").indexOf(x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;
