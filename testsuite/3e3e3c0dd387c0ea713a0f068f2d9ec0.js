load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getTime property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
es5id: 15.9.5.9_A3_T1
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

var x = Date.prototype.getTime.length;
verifyNotWritable(Date.prototype.getTime, "length", null, 1);
if (Date.prototype.getTime.length !== x) {
  $ERROR('#1: The Date.prototype.getTime.length has the attribute ReadOnly');
}
