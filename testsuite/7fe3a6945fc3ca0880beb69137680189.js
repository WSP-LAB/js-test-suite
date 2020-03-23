load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Value Property E of the Math Object has the attribute ReadOnly
es5id: 15.8.1.1_A4
description: Checking if Math.E property has the attribute ReadOnly
includes: [propertyHelper.js]
---*/

// CHECK#1
var x = Math.E;
verifyNotWritable(Math, "E", null, 1);
if (Math.E !== x) {
  $ERROR('#1: Math.E hasn\'t ReadOnly: \'x = Math.E;Math.E = 1;Math.E === x\'');
}
