load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The isNaN property has not prototype property
es5id: 15.1.2.4_A2.6
description: Checking isNaN.prototype
---*/

//CHECK#1
if (isNaN.prototype !== undefined) {
  $ERROR('#1: isNaN.prototype === undefined. Actual: ' + (isNaN.prototype));
}
