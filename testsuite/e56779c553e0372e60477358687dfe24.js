load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Var Statement for automatic semicolon insertion
es5id: 7.9_A7_T7
description: Checking if execution of "var x \n y" passes
---*/

assert.throws(ReferenceError, function() {
var x 
y
});
