load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * -Infinity is the same as Number.NEGATIVE_INFINITY
 *
 * @path ch08/8.5/S8.5_A12.2.js
 * @description Compare -Infinity with Number.NEGATIVE_INFINITY
 */

var n_inf=-Infinity;

//CHECK #1 
if (n_inf !== Number.NEGATIVE_INFINITY){
  $ERROR('#1: -Infinity is the same as Number.NEGATIVE_INFINITY');
}

