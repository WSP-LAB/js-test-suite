load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If property of object not exist, return undefined
 *
 * @path ch08/8.1/S8.1_A4.js
 * @description Check value of not existed property
 */

// CHECK#1 
if ((new Object()).newProperty !== undefined) {
  $ERROR('#1: (new Object()).newProperty === undefined. Actual: ' + ((new Object()).newProperty));
} 


