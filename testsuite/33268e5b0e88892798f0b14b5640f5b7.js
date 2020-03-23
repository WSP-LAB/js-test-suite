load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the production "do Statement while ( Expression )" is evaluated, then (normal, V, empty) is returned
 *
 * @path ch12/12.6/12.6.1/S12.6.1_A3.js
 * @description Using eval "eval("do __in__do=1; while (false)")"
 */

__evaluated = eval("do __in__do=1; while (false)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== 1) {
	$ERROR('#1: __in__do === 1. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 1) {
	$ERROR('#2: __evaluated === 1. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

