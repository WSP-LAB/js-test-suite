load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "var" statement within "for" statement is allowed
 *
 * @path ch12/12.2/S12.2_A10.js
 * @description Declaring variable within a "for" IterationStatement
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	__ind=__ind;
} catch (e) {
    $ERROR('#1: var inside "for" is admitted '+e.message);
}
//
//////////////////////////////////////////////////////////////////////////////

for (var __ind;;){
    break;
}

