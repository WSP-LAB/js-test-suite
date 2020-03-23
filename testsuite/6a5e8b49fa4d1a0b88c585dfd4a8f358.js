load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date property "parse" has { DontEnum } attributes
es5id: 15.9.4.2_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.propertyIsEnumerable('parse')) {
  $ERROR('#1: The Date.parse property has the attribute DontEnum');
}

for(var x in Date) {
  if(x === "parse") {
    $ERROR('#2: The Date.parse has the attribute DontEnum');
  }
}
