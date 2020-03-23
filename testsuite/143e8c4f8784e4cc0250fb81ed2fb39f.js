load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * In the "if" Statement eval in Expression is admitted
 *
 * @path ch12/12.5/S12.5_A2.js
 * @description Checking by using eval "eval("true")"
 * @negative
 */

if (eval("true")) $FAIL('#1: In the "if" Statement eval as Expression is admitted');

