load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When control enters an execution context for function code,
 * an arguments object is created and initialised
 *
 * @path ch10/10.6/S10.6_A1.js
 * @description Executing function which uses arguments object
 */

//CHECK#1
function f1(){
  return arguments;
}

try{
  var x = f1();
}
catch(e){
  $ERROR("#1: arguments doesn't exists");
}

//CHECK#2
var f2 = function(){
  return arguments;
}

try{
  var x = f2();
}
catch(e){
  $ERROR("#2: arguments doesn't exists");
}

