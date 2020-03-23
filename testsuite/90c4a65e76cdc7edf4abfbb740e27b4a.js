load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 507295;
var summary = 'TM: assert with using result of assignment to closure var'
var actual = '';
var expect = 'do not crash';


//-----------------------------------------------------------------------------
start_test();

(function () {
    var y;
    (eval("(function () {\
               for (var x = 0; x < 3; ++x) {\
               ''.replace(/a/, (y = 3))\
               }\
           });\
     "))()
})()

actual = 'do not crash'
finish_test();
//-----------------------------------------------------------------------------

function start_test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
}

function finish_test()
{
  reportCompare(expect, actual, summary);
  exitFunc ('test');
}
