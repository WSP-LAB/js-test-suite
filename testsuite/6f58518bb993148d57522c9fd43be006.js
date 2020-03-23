load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The form (?! Disjunction ) specifies a zero-width negative lookahead.
    In order for it to succeed, the pattern inside Disjunction must fail to match at the current position.
    The current position is not advanced before matching the sequel
es5id: 15.10.2.8_A2_T8
description: Execute /(\.(?!com|org)|\/)/.test("ah.com") and check results
---*/

var __executed = /(\.(?!com|org)|\/)/.test("ah.com");

//CHECK#1
if (__executed) {
	$ERROR('#1: /(\\.(?!com|org)|\\/)/.test("ah.com") === false');
}
