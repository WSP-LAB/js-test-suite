load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * <LS> between chunks of one string not allowed
 *
 * @path ch08/8.4/S8.4_A7.4.js
 * @description Insert <LS> between chunks of one string
 * @negative
 */

eval("var x = asdf\u2029ghjk");

