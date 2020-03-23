load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of sort has the attribute ReadOnly
es5id: 15.4.4.11_A7.3
description: Checking if varying the length fails
includes: [propertyHelper.js]
---*/

//CHECK#1
var x = Array.prototype.sort.length;
verifyNotWritable(Array.prototype.sort, "length", null, Infinity);
if (Array.prototype.sort.length !== x) {
  $ERROR('#1: x = Array.prototype.sort.length; Array.prototype.sort.length = Infinity; Array.prototype.sort.length === x. Actual: ' + (Array.prototype.sort.length));
}
