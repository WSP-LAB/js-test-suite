load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Syntax constructions of switch statement
 *
 * @path ch12/12.11/S12.11_A3_T4.js
 * @description Using "case" that has no Expresson after it. "CaseClause: case Expression : [StatementList]"
 * @negative
 */

function SwitchTest(value){
  var result = 0;
  
  switch(value) {
    case:
      result += 2;
    default:
      result += 32;
      break;
  }
  
  return result;
}

var x = SwitchTest(0);

