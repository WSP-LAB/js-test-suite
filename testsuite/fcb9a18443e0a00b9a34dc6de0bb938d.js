load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date property "parse" has { DontEnum } attributes
es5id: 15.9.4.2_A1_T1
description: Checking absence of ReadOnly attribute
---*/

var x = Date.parse;
if(x === 1)
  Date.parse = 2;
else
  Date.parse = 1;
if (Date.parse === x) {
  $ERROR('#1: The Date.parse has not the attribute ReadOnly');
}
