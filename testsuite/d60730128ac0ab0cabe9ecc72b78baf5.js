load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator "in" uses GetValue
 *
 * @path ch11/11.8/11.8.7/S11.8.7_A2.1_T2.js
 * @description If GetBase(RelationalExpression) is null, throw ReferenceError
 */

//CHECK#1
try {
  MAX_VALUE in Number;
  $ERROR('#1.1: MAX_VALUE in Number throw ReferenceError. Actual: ' + (MAX_VALUE in Number));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: MAX_VALUE in Number throw ReferenceError. Actual: ' + (e));  
  }
}

