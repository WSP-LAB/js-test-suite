load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The [[Class]] property of the newly constructed object
    is set to "Boolean"
es5id: 15.6.2.1_A4
description: For testing toString function is used
---*/

delete Boolean.prototype.toString;

var obj = new Boolean();

//CHECK#1
if (obj.toString() !== "[object Boolean]") {
  $ERROR('#1: The [[Class]] property of the newly constructed object is set to "Boolean"');
}
