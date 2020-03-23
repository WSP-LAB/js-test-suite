load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "for(key in null)" Expression is allowed
 *
 * @path ch12/12.6/12.6.4/S12.6.4_A2.js
 * @description Checking if execution of "for(key in null)" passes
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	for(__key in null){
	    var key=__key;
	};
} catch (e) {
	$ERROR('#1: "for(__key in null){}" does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (key!==undefined) {
	$ERROR('#2: key === undefined. Actual: key ==='+key);
}
//
//////////////////////////////////////////////////////////////////////////////




