load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.5
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Null
---*/

var x;

//CHECK#1
x = true;
x += null;
if (x !== 1) {
  $ERROR('#1: x = true; x += null; x === 1. Actual: ' + (x));
}

//CHECK#2
x = null;
x += true;
if (x !== 1) {
  $ERROR('#2: x = null; x += true; x === 1. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x += null;
if (x !== 1) {
  $ERROR('#3: x = new Boolean(true); x += null; x === 1. Actual: ' + (x));
}

//CHECK#4
x = null;
x += new Boolean(true);
if (x !== 1) {
  $ERROR('#4: x = null; x += new Boolean(true); x === 1. Actual: ' + (x));
}