load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Equivalent to the expression RegExp.prototype.exec(string) != null
es5id: 15.10.6.3_A1_T17
description: RegExp is /ll|l/ and tested string is null
---*/

var __re = /ll|l/;

//CHECK#0
if (__re.test(null) !== (__re.exec(null) !== null)) {
	$ERROR('#0: __re = /ll|l/; __re.test(null) === (__re.exec(null) !== null)');
}
