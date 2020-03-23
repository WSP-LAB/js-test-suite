load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Equivalent to the expression RegExp.prototype.exec(string) != null
es5id: 15.10.6.3_A1_T16
description: RegExp is /undefined/ and call test() without arguments
---*/

var __re = /undefined/;

//CHECK#0
if (__re.test() !== (__re.exec() !== null)) {
	$ERROR('#0: __re = /undefined/; __re.test() === (__re.exec() !== null)');
}
