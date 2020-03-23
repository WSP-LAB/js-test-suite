load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Infinity is DontEnum
es5id: 15.1.1.2_A4
description: Use for-in statement
---*/

// CHECK#1
for (var prop in this) {
  if (prop === "Infinity") {
	$ERROR('#1: The Infinity is DontEnum');
  }
}
