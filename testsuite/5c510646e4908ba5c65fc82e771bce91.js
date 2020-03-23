load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T8
description: Call toLocaleUpperCase() function of Infinity
---*/

Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

if (Infinity.toLocaleUpperCase()!== "INFINITY") {
  $ERROR('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; Infinity.toLocaleUpperCase()=== "INFINITY". Actual: '+Infinity.toLocaleUpperCase());
}
