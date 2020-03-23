load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    String.prototype.toLocaleLowerCase() return a string, but not a String
    object
es5id: 15.5.4.17_A2_T1
description: Checking returned result
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("Hello, WoRlD!".toLocaleLowerCase() !== "hello, world!") {
  $ERROR('#1: "Hello, WoRlD!".toLocaleLowerCase() === "hello, world!". Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ("Hello, WoRlD!".toLocaleLowerCase() !== String("hello, world!")) {
  $ERROR('#2: "Hello, WoRlD!".toLocaleLowerCase() === String("hello, world!"). Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("Hello, WoRlD!".toLocaleLowerCase() === new String("hello, world!")) {
  $ERROR('#3: "Hello, WoRlD!".toLocaleLowerCase() !== new String("hello, world!")');
}
//
//////////////////////////////////////////////////////////////////////////////
