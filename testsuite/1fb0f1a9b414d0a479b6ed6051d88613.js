load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object constructor has the property "prototype"
es5id: 15.2.3_A1
description: Checking existence of the property "prototype"
---*/

if(!Object.hasOwnProperty("prototype")){
  $ERROR('#1: The Object constructor has the property "prototype"');
}
