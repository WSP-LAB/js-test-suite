load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * 1. Evaluate Expression
 *
 * @path ch12/12.13/S12.13_A3_T5.js
 * @description Evaluating equation expression
 */

// CHECK#1
var a=true;
var b=false;
try{
  throw ((a&&(!b))?"exception":" #1");
}
catch(e){
  if (e!=="exception") $ERROR('#1: Exception ==="exception"(operaton ? , ). Actual:  Exception ==='+e  );
}

