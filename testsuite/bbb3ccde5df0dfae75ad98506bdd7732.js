load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype property has the attribute DontDelete
es5id: 15.3.3.1_A3
description: Checking if deleting the Function.prototype property fails
includes: [propertyHelper.js]
---*/

verifyNotConfigurable(Function, "prototype");

//CHECK#1
try {
  if ((delete Function.prototype) !== false) {
    $ERROR('#1: Function.prototype has the attribute DontDelete');
  }
} catch (e) {
  if (e instanceof Test262Error) throw e;
  assert(e instanceof TypeError);
}

//CHECK#2
if (!(Function.hasOwnProperty('prototype'))) {
  $ERROR('#2: the Function.prototype property has the attributes DontDelete.');
}
