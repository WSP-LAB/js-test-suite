load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "continue" within a function call that is within an IterationStatement yields SyntaxError
 *
 * @path ch12/12.7/S12.7_A6.js
 * @description Using labaled "continue Identifier" within a function body
 * @negative
 */

var x=0,y=0;

LABEL1 : do {
    x++;
    (function(){continue LABEL1;})();
    y++;
} while(0);

