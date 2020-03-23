load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCSeconds" has { DontEnum } attributes
es5id: 15.9.5.23_A1_T1
description: Checking absence of ReadOnly attribute
---*/

var x = Date.prototype.getUTCSeconds;
if(x === 1)
  Date.prototype.getUTCSeconds = 2;
else
  Date.prototype.getUTCSeconds = 1;
if (Date.prototype.getUTCSeconds === x) {
  $ERROR('#1: The Date.prototype.getUTCSeconds has not the attribute ReadOnly');
}
