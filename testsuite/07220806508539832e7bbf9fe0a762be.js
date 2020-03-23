load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Error.prototype has name property
es5id: 15.11.4.2_A1
description: Checking Error.prototype.name
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('name')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'name\') return true. Actual: '+Error.prototype.hasOwnProperty('name'));
}
//
//////////////////////////////////////////////////////////////////////////////
