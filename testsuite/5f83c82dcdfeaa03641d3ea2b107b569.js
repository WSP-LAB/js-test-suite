load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If no arguments are given, Math.max() is -Infinity
es5id: 15.8.2.11_A1
description: Checking if Math.max() equals to -Infinity
---*/

// CHECK#1
if (Math.max() != -Infinity)
{
	$ERROR("#1: 'Math.max() != -Infinity'");
}
