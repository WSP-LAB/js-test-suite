load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of boolean conversion from nonempty string value (length is not zero) is true; from empty String (length is zero) is false
 *
 * @path ch09/9.2/S9.2_A5_T1.js
 * @description "" is converted to Boolean by explicit transformation
 */

// CHECK#1
if (Boolean("") !== false) {
  $ERROR('#1: Boolean("") === false. Actual: ' + (Boolean("")));
}

