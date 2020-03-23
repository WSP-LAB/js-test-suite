load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The FunctionBody must be SourceElements
 *
 * @path ch13/13.0/S13_A7_T3.js
 * @description Checking if execution of "function __func(){\A\B\C}" fails
 * @negative
 */

function __func(){\A\B\C};

