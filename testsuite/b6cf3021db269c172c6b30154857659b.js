load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration within Eval statement is initialized as the program reaches the eval statement
 *
 * @path ch12/12.2/S12.2_A5.js
 * @description Executing eval("var x")
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	x=x;
	$ERROR('#1: "x=x" lead to throwing exception');
}catch(e){
	$PRINT(e.message);
};
//
//////////////////////////////////////////////////////////////////////////////

eval("var x");

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try{
	x=x;
}catch(e){
	$ERROR('#2: VariableDeclaration inside Eval statement is initialized when program reaches the eval statement '+e.message);
};
//
//////////////////////////////////////////////////////////////////////////////

