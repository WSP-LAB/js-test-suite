load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegularExpressionFirstChar :: LineTerminator is incorrect
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A1.3_T5.js
 * @description Line separator, with eval
 */

//CHECK#1
try {
   eval("/\u2028/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: Line separator is incorrect. Actual: ' + (eval("/\u2028/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: Line separator is incorrect. Actual: ' + (e));
  }
}     

