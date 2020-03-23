load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Boolean.prototype has the attribute ReadOnly
es5id: 15.6.3.1_A2
description: Checking if varying the Boolean.prototype property fails
includes: [propertyHelper.js]
---*/

// CHECK#1
var x = Boolean.prototype;
verifyNotWritable(Boolean, "prototype", null, 1);
if (Boolean.prototype !== x) {
  $ERROR('#1: Boolean.prototype has the attribute ReadOnly');
}
