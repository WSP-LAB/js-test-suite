load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype property has the attribute ReadOnly
es5id: 15.3.3.1_A1
description: Checking if varying the Function.prototype property fails
includes: [propertyHelper.js]
---*/

var obj = Function.prototype;

verifyNotWritable(Function, "prototype", null, function(){return "shifted";});

//CHECK#1
if (Function.prototype !== obj) {
  $ERROR('#1: the Function.prototype property has the attributes ReadOnly.');
}

//CHECK#2
try {
  if(Function.prototype()!==undefined){
   $ERROR('#2: the Function.prototype property has the attributes ReadOnly');
  }
} catch (e) {
  $ERROR('#2.1: the Function.prototype property has the attributes ReadOnly: '+e);
}
