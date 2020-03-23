load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Get arguments of function
 *
 * @path ch10/10.6/S10.6_A7.js
 * @description Use property arguments
 */

function f1() {
  return arguments;
}
  
//CHECK#1-5
for(var i = 1; i < 5; i++){  
if (f1(1,2,3,4,5)[i] !== (i+1))
  $ERROR("#"+i+": Returning function's arguments work wrong, f1(1,2,3,4,5)["+i+"] !== "+(i+1));
}

