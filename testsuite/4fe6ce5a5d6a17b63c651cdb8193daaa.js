load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Assignment to string literal calls String constructor
 *
 * @path ch08/8.4/S8.4_A12.js
 * @description Check constructor of simple assigned variable
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var str = "rock'n'roll";
if (str.constructor !== String){
  $ERROR('#1: var str = "rock\'n\'roll"; str.constructor === String. Actual: ' + (str.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

