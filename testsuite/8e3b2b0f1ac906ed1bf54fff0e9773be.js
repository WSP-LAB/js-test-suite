load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Object.prototype.propertyIsEnumerable has not prototype property
es5id: 15.2.4.7_A6
description: >
    Checking if obtaining the prototype property of
    Object.prototype.propertyIsEnumerable fails
---*/

//CHECK#1
if (Object.prototype.propertyIsEnumerable.prototype !== undefined) {
  $ERROR('#1: Object.prototype.propertyIsEnumerable has not prototype property'+Object.prototype.propertyIsEnumerable.prototype);
}
//
