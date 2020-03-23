load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.1_A3
description: Checking if deleting "Object.prototype" property fails;
includes: [propertyHelper.js]
---*/

verifyNotConfigurable(Object, "prototype");

//CHECK#1
try {
  if((delete Object.prototype) !== false){
    $ERROR('#1: Object.prototype has the attribute DontDelete');
  }
} catch (e) {
  if (e instanceof Test262Error) throw e;
  assert(e instanceof TypeError);
}

//CHECK#2
if (!(Object.hasOwnProperty('prototype'))) {
  $ERROR('#2: the Object.prototype property has the attributes DontDelete.');
}
