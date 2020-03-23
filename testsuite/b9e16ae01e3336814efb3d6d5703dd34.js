load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp syntax errors must be caught when matcher(s) compiles
es5id: 15.10.1_A1_T11
description: Tested RegExp is "?a"
---*/

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("?a") throw SyntaxError. Actual: ' + (new RegExp("?a")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("?a") throw SyntaxError. Actual: ' + (e));
	}
}
