load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MIN_VALUE is DontDelete
es5id: 15.7.3.3_A3
description: Checking if deleting Number.MIN_VALUE fails
includes: [propertyHelper.js]
---*/

verifyNotConfigurable(Number, "MIN_VALUE");

//CHECK#1
try {
  if (delete Number.MIN_VALUE !== false) {
    $ERROR('#1: delete Number.MIN_VALUE === false');
  }
} catch (e) {
  if (e instanceof Test262Error) throw e;
  assert(e instanceof TypeError);
}
