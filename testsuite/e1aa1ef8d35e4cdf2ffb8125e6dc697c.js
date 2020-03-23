load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The scope chain is initialised to contain the same objects,
 * in the same order, as the calling context's scope chain
 *
 * @path ch10/10.4/10.4.2/S10.4.2_A1.1_T5.js
 * @description eval within global execution context
 */

var i;
var j;
str1 = '';
str2 = '';
var x = 1;

for(i in this){
  str1+=i;
}

eval('for(j in this){\nstr2+=j;\n}');

if(!(str1 === str2)){
  $ERROR("#1: scope chain must contain same objects in the same order as the calling context");
}

var y = 2;

