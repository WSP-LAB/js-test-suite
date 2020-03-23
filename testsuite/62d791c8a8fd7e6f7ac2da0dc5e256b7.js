load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "break" within a function call that is nested in a IterationStatement yields SyntaxError
 *
 * @path ch12/12.8/S12.8_A6.js
 * @description Checking if using "break Identifier" within a function body appears to be invalid
 * @negative
 */

var x=0,y=0;

LABEL1 : do {
    x++;
    (function(){break LABEL1;})();
    y++;
} while(0);

