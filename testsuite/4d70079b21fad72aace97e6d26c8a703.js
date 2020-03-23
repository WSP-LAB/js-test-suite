load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Unicode symbols in function name are allowed
 *
 * @path ch13/13.0/S13_A14.js
 * @description Defining function name with unicode symbols
 */

eval("function __func\u0041(__arg){return __arg;};");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __funcA !== "function") {
	$ERROR('#1: unicode symbols in function name are allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

