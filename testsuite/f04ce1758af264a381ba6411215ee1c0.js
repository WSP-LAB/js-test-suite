load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Catching objects with try/catch/finally statement
 *
 * @path ch12/12.14/S12.14_A18_T2.js
 * @description Catching null
 */

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception ===null. Actual: '+e);
}

