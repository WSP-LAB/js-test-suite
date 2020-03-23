load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype property has the attribute ReadOnly
es5id: 15.2.3.1_A1
description: Checking if varying "Object.prototype" property fails
includes: [propertyHelper.js]
---*/

var obj = Object.prototype;
verifyNotWritable(Object, "prototype", null, function(){return "shifted";});

//CHECK#1
if (Object.prototype !== obj) {
  $ERROR('#1: the Object.prototype property has the attributes ReadOnly.');
}

//CHECK#2
try {
  Object.prototype();
  $ERROR('#2: the Object.prototype property has the attributes ReadOnly');
} catch (e) {
  if (e instanceof Test262Error) throw e;
}
