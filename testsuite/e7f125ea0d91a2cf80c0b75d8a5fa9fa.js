load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Empty string variable has a length property
 *
 * @path ch08/8.4/S8.4_A4.js
 * @description Try read length property of empty string variable
 */

var __str = "";
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.length !== 0) {
  $ERROR('#1: var __str = ""; __str.length === 0. Actual: ' + (__str));
}
//
//////////////////////////////////////////////////////////////////////////////

