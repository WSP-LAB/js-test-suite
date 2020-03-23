load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If P's characters do not have the form Pattern, then throw a SyntaxError
    exception
es5id: 15.10.4.1_A9_T3
description: Pattern is "[a--z]"
---*/

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("[a--z]") throw SyntaxError. Actual: ' + (new RegExp("[a--z]")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("[a--z]") throw SyntaxError. Actual: ' + (e));
	}
}
