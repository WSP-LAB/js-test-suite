load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Value Property LN2 of the Math Object has the attribute DontDelete
es5id: 15.8.1.3_A3
description: Checking if Math.LN2 property has the attribute DontDelete
includes: [propertyHelper.js]
---*/

verifyNotConfigurable(Math, "LN2");

// CHECK#1
try {
  if (delete Math.LN2 === true) {
    $ERROR('#1: Value Property LN2 of the Math Object hasn\'t attribute DontDelete: \'Math.LN2 === true\'');
  }
} catch (e) {
  if (e instanceof Test262Error) throw e;
  assert(e instanceof TypeError);
}
