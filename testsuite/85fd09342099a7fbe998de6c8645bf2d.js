load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setFullYear" has { DontEnum } attributes
es5id: 15.9.5.40_A1_T1
description: Checking absence of ReadOnly attribute
---*/

var x = Date.prototype.setFullYear;
if(x === 1)
  Date.prototype.setFullYear = 2;
else
  Date.prototype.setFullYear = 1;
if (Date.prototype.setFullYear === x) {
  $ERROR('#1: The Date.prototype.setFullYear has not the attribute ReadOnly');
}
