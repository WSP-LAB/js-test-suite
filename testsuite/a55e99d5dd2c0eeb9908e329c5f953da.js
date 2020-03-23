load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T7
description: Applying grouping operator to typeof operator
---*/

//CHECK#1
if (typeof (x) !== "undefined") {
  $ERROR('#1: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}
