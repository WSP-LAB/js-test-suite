load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype ignoreCase property does not have a set accessor
es5id: 15.10.7.3_A10
description: Checking if varying the ignoreCase property fails
includes: [propertyHelper.js]
---*/

var __re = RegExp.prototype;

//CHECK#1
if (__re.hasOwnProperty('ignoreCase') !== true) {
  $ERROR('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'ignoreCase\') === true');
}

var __sample = /a|b|c/;
var __obj = __sample.ignoreCase;

verifyNotWritable(__sample, "ignoreCase", "ignoreCase", "shifted");

//CHECK#2
if (__sample.ignoreCase !== __obj) {
  $ERROR('#2: __sample = /a|b|c/; __obj = __sample.ignoreCase; __sample.ignoreCase = "shifted"; __sample.ignoreCase === __obj. Actual: ' + (__sample.ignoreCase));
}
