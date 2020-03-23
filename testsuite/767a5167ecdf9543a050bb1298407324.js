load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Global object has properties such as built-in objects such as
 * Math, String, Date, parseInt, etc
 *
 * @path ch10/10.2/10.2.3/S10.2.3_A1.3_T4.js
 * @description Eval execution context - Other Properties
 */

var evalStr = 
'//CHECK#27\n'+
'if ( Math === null ) {\n'+
'  $ERROR("#27: Math === null");\n'+
'}\n'+
';\n';

eval(evalStr);

