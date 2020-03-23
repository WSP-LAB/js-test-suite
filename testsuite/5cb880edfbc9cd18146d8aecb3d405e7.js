load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: length property has the attributes {ReadOnly}
es5id: 15.5.5.1_A4_T2
description: Checking if varying the length property of String fails
includes: [propertyHelper.js]
---*/

var __str__instance = new String("globglob");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__str__instance.hasOwnProperty("length"))) {
  $ERROR('#1: var __str__instance = new String("globglob"); __str__instance.hasOwnProperty("length") return true. Actual: '+__str__instance.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str__instance.length !== 8) {
  $ERROR('#2: var __str__instance = new String("globglob"); __str__instance.length === 8. Actual: __str__instance.length ==='+__str__instance.length );
}
//
//////////////////////////////////////////////////////////////////////////////

verifyNotWritable(__str__instance, "length", null, -1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str__instance.length !== 8) {
  $ERROR('#3: var __str__instance = new String("globglob"); __str__instance.length=-1; __str__instance.length === 8(after redefine length property). Actual: __str__instance.length ==='+__str__instance.length );
}
//
//////////////////////////////////////////////////////////////////////////////
