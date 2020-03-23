load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp constructor has length property whose value is 2
es5id: 15.10.5_A1
description: Checking RegExp.length property
---*/

//CHECK#1
if (RegExp.length !== 2) {
	$ERROR('#1: RegExp.length === 2. Actual: ' + (RegExp.length));
}
