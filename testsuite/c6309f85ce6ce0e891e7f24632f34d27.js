load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype property has the attribute ReadOnly
es5id: 15.10.5.1_A4
description: Checking if varying the RegExp.prototype property fails
includes: [propertyHelper.js]
---*/

//CHECK#1
if (RegExp.hasOwnProperty('prototype') !== true) {
	$ERROR('#1: RegExp.hasOwnProperty(\'prototype\') === true');
}

var __obj = RegExp.prototype;

verifyNotWritable(RegExp, "prototype", null, function(){return "shifted";});

//CHECK#2
if (RegExp.prototype !== __obj) {
	$ERROR('#2: __obj = RegExp.prototype; RegExp.prototype = function(){return "shifted";}; RegExp.prototype === __obj. Actual: ' + (RegExp.prototype));
}
