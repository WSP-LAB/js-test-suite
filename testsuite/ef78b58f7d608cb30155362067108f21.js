load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration within "do-while" loop is allowed
 *
 * @path ch12/12.2/S12.2_A12.js
 * @description Declaring variable within "do-while" statement
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	x=x;
} catch (e) {
	$ERROR('#1: Declaration variable inside "do-while" statement is admitted');
}
//
//////////////////////////////////////////////////////////////////////////////

do var x; while (false);

