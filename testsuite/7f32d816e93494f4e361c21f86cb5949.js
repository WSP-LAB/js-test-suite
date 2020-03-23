load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.toString has not prototype property
es5id: 15.3.4.2_A6
description: >
    Checking if obtaining the prototype property of
    Function.prototype.toString fails
---*/

//CHECK#1
if (Function.prototype.toString.prototype !== undefined) {
  $ERROR('#1: Function.prototype.toString has not prototype property'+Function.prototype.toString.prototype);
}
