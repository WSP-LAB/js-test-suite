load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "do-while" Statement is evaluated without syntax checks
 *
 * @path ch12/12.6/12.6.1/S12.6.1_A9.js
 * @description Throwing system exception whithin a "do-while" loop
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	do {
	    var x = 1; 
	    abaracadabara;
	} while(0);
	$ERROR('#1: "abbracadabra" lead to throwing exception');

} catch (e) {
    if (e instanceof Test262Error) throw e;
}

if (x !== 1) {
	$ERROR('#1.1: x === 1. Actual:  x ==='+ x  );
}
//
//////////////////////////////////////////////////////////////////////////////

