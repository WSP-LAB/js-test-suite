load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of boolean conversion from boolean value is no conversion
 *
 * @path ch09/9.2/S9.2_A3_T1.js
 * @description true and false convert to Boolean by explicit transformation
 */

// CHECK#1 
if (Boolean(true) !== true) {
  $ERROR('#1: Boolean(true) === true. Actual: ' + (Boolean(true)));	
}

// CHECK#2
if (Boolean(false) !== false) {
  $ERROR('#2: Boolean(false) === false. Actual: ' + (Boolean(false)));
}

