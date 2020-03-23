load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.charCodeAt.length property has the attribute ReadOnly
es5id: 15.5.4.5_A10
description: >
    Checking if varying the String.prototype.charCodeAt.length
    property fails
includes: [propertyHelper.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  $ERROR('#1: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charCodeAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.charCodeAt.length;

verifyNotWritable(String.prototype.charCodeAt, "length", null, function(){return "shifted";});

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charCodeAt.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.charCodeAt.length; String.prototype.charCodeAt.length = function(){return "shifted";}; String.prototype.charCodeAt.length === __obj. Actual: '+String.prototype.charCodeAt.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////
