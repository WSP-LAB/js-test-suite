load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "getTimezoneOffset"
es5id: 15.9.5_A26_T1
description: The Date.prototype has the property "getTimezoneOffset"
---*/

if(Date.prototype.hasOwnProperty("getTimezoneOffset") !== true){
  $ERROR('#1: The Date.prototype has the property "getTimezoneOffset"');
}
