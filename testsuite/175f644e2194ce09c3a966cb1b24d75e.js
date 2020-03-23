load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Infinity is the same as +Infinity
 *
 * @path ch08/8.5/S8.5_A8.js
 * @description Compare Infinity and +Infinity
 */

var p_inf=+Infinity;
var inf=Infinity;

///////////////////////////////////////////////////////
// 
if (p_inf!==inf){
  $ERROR('#1: Infinity is the same as +Infinity');
}
//
//////////////////////////////////////////////////////////

