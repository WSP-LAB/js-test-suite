load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The this value associated with an executioncontext is immutable
 *
 * @path ch10/10.1/S10.1.7_A1_T1.js
 * @description Checking if deleting "this" fails
 */

//CHECK#1
if (delete this !== true)
  $ERROR('#1: The this value associated with an executioncontext is immutable. Actual: this was deleted');
  

