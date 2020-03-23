load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.call can't be used as [[Construct]] caller
es5id: 15.3.4.4_A7_T3
description: Checking if creating "new Function.call" fails
---*/

try {
  var obj = new Function.call;
  $ERROR('#1: Function.prototype.call can\'t be used as [[Construct]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Function.prototype.call can\'t be used as [[Construct]] caller');
  }
}
