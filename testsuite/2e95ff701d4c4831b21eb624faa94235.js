load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "valueOf" has { DontEnum } attributes
es5id: 15.9.5.8_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('valueOf')) {
  $ERROR('#1: The Date.prototype.valueOf property has the attribute DontEnum');
}

for(var x in Date.prototype) {
  if(x === "valueOf") {
    $ERROR('#2: The Date.prototype.valueOf has the attribute DontEnum');
  }
}
