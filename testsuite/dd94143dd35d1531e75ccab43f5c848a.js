load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The splice property of Array has not prototype property
es5id: 15.4.4.12_A5.6
description: Checking Array.prototype.splice.prototype
---*/

//CHECK#1
if (Array.prototype.splice.prototype !== undefined) {
  $ERROR('#1: Array.prototype.splice.prototype === undefined. Actual: ' + (Array.prototype.splice.prototype));
}
