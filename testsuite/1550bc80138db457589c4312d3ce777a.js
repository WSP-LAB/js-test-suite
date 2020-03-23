load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A13.js
 * @description Declaring variable in "for" ExpressionNoIn
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	index = index;
} catch (e) {
	$ERROR('#1: VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////


for(var index=0; index<6; index++) {
	;
}

