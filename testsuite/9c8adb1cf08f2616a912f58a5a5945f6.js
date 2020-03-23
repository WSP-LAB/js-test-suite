load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production StatementList  Statement is evaluated as follows
    1. Evaluate Statement.
    2. If an exception was thrown, return (throw, V, empty) where V is the exception
es5id: 12.1_A2
description: Throwing exception within a Block
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.throws(ReferenceError, function() {
	{
		x();
	}
});

//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
    throw "catchme";	
    $ERROR('#2: throw "catchme" lead to throwing exception');
} catch (e) {
	if (e!=="catchme") {
		$ERROR('#2.1: Exception === "catchme". Actual:  Exception ==='+ e  );
	}
}

//
//////////////////////////////////////////////////////////////////////////////
