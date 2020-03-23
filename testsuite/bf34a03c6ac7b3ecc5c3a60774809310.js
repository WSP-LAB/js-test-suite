load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of encodeURI has the attribute ReadOnly
es5id: 15.1.3.3_A5.3
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/

//CHECK#1
var x = encodeURI.length;
verifyNotWritable(encodeURI, "length", null, Infinity);
if (encodeURI.length !== x) {
  $ERROR('#1: x = encodeURI.length; encodeURI.length = Infinity; encodeURI.length === x. Actual: ' + (encodeURI.length));
}
