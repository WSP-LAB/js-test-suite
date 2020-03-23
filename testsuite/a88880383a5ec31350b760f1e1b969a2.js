load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production IterationStatement: "for (var VariableDeclarationListNoIn; Expression; Expression) Statement"
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A15.js
 * @description Statement must be evaluated before second Expression is evaluated
 */

//CHECK#1
for(var i=0;i<10;i++){
	i*=2;
  break;	
}
if (i!==0)  $ERROR('#1: i === 0. Actual:  i ==='+ i  );

//CHECK#2
for(var i=0;i<10;i++){
  i*=2;
  if (i===3)  $ERROR('#2: i !== 3');
}


