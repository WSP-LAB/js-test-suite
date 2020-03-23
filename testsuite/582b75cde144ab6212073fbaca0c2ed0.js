load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The activation object is initialised with a property with name arguments and attributes {DontDelete}
 *
 * @path ch10/10.1/S10.1.6_A1_T1.js
 * @description Checking if deleting function parameter is possible
 * @noStrict
 */

//CHECK#1
function f1(a){
  delete a;
  return a;
}
if (f1(1) !== 1)
  $ERROR('#1: Function parameter was deleted');


