load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: length property has the attributes {DontDelete}
es5id: 15.5.5.1_A3
description: Checking if deleting the length property of String fails
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

verifyNotConfigurable(__str__instance, "length");

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
  if (delete __str__instance.length === true) {
    $ERROR('#2: var __str__instance = new String("globglob"); delete __str__instance.length !== true');
  }
} catch (e) {
  if (e instanceof Test262Error) throw e;
  assert(e instanceof TypeError);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(__str__instance.hasOwnProperty("length"))) {
  $ERROR('#3: var __str__instance = new String("globglob"); delete __str__instance.length; __str__instance.hasOwnProperty("length") return true. Actual: '+__str__instance.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////
