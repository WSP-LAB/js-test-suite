load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since applying the "call" method to Function constructor themself leads
    to creating a new function instance, the second argument must be a valid
    function body
es5id: 15.3_A2_T1
description: Checking if executing "Function.call(this, "var x / = 1;")" fails
---*/

//CHECK#
try{
  Function.call(this, "var x / = 1;");
} catch(e){
  if (!(e instanceof SyntaxError)) {
  	$ERROR('#1: function body must be valid');
  }
}
