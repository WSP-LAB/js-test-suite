load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When "while" IterationStatement is evaluated, (normal, V, empty) is returned
 *
 * @path ch12/12.6/12.6.2/S12.6.2_A3.js
 * @description Using eval
 */

var __in__do;

__evaluated = eval("while (false) __in__do=1;");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== undefined) {
	$ERROR('#1: __in__do === undefined. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== undefined) {
	$ERROR('#2: __evaluated === undefined. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

