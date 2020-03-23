load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Sanity test for throw statement
es5id: 12.13_A1
description: Trying to throw exception with "throw"
---*/

var inCatch = false;

try {
  throw "expected_message";
} catch (err) {
  assert.sameValue(err, "expected_message");
  inCatch = true;
}

assert.sameValue(inCatch, true);
