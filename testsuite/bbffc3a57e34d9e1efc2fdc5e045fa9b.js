load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x % y returns ToNumber(x) % ToNumber(y)
 *
 * @path ch11/11.5/11.5.3/S11.5.3_A3_T1.5.js
 * @description Type(x) and Type(y) vary between Object object and Function object
 */

//CHECK#1
if (isNaN({} % function(){return 1}) !== true) {
  $ERROR('#1: {} % function(){return 1} === Not-a-Number. Actual: ' + ({} % function(){return 1}));
}

//CHECK#2
if (isNaN(function(){return 1} % {}) !== true) {
  $ERROR('#2: function(){return 1} % {} === Not-a-Number. Actual: ' + (function(){return 1} % {}));
}

//CHECK#3
if (isNaN(function(){return 1} % function(){return 1}) !== true) {
  $ERROR('#3: function(){return 1} % function(){return 1} === Not-a-Number. Actual: ' + (function(){return 1} % function(){return 1}));
}

//CHECK#4
if (isNaN({} % {}) !== true) {
  $ERROR('#4: {} % {} === Not-a-Number. Actual: ' + ({} % {}));
}

