load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of Error.prototype.name is "Error"
es5id: 15.11.4.2_A2
description: Checking value of Error.prototype.name
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (Error.prototype.name!=="Error") {
	$ERROR('#1: Error.prototype.name==="Error". Actual: '+Error.prototype.name);
}
//
//////////////////////////////////////////////////////////////////////////////
