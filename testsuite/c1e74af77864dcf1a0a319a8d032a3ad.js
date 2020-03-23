load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Values of the List type are simply ordered sequences of values
 *
 * @path ch08/8.8/S8.8_A2_T1.js
 * @description Call function __mFunc(1,2,3) with 3 arguments
 */

function __mFunc(){return arguments.length;};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__mFunc(1,2,3) !== 3){
  $ERROR('#1: function __mFunc(){return arguments.length;}; __mFunc(1,2,3) === 3. Actual: ' + (__mFunc(1,2,3)));
}
//
//////////////////////////////////////////////////////////////////////////////

