load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The eval property has not prototype property
es5id: 15.1.2.1_A4.6
description: Checking eval.prototype
---*/

//CHECK#1
if (eval.prototype !== undefined) {
  $ERROR('#1: eval.prototype === undefined. Actual: ' + (eval.prototype));
}
