load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be the empty string if pattern is undefined
es5id: 15.10.4.1_A3_T2
description: RegExp is new RegExp(void 0)
---*/

var __re = new RegExp(void 0);

//CHECK#2
if (__re.multiline !== false) {
  $ERROR('#2: __re = new RegExp(void 0); __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
  $ERROR('#3: __re = new RegExp(void 0); __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== false) {
  $ERROR('#4: __re = new RegExp(void 0); __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}
