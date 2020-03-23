load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production QuantifierPrefix :: * evaluates by returning the two
    results 0 and \infty
es5id: 15.10.2.7_A4_T21
description: Execute /[xyz]*1/.test('a0.b2.c3') and check results
---*/

var __executed = /[xyz]*1/.test('a0.b2.c3');

//CHECK#1
if (__executed) {
	$ERROR('#1: /[xyz]*1/.test(\'a0.b2.c3\') === false');
}
