load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 356250;
var summary = 'Do not assert: !fp->fun || !(fp->fun->flags & JSFUN_HEAVYWEIGHT) || fp->callobj';
var actual = 'No Crash';
var expect = 'No Crash';

(function() { eval("(function() { })"); })();
reportCompare(expect, actual, summary + ': nested 0');

//-----------------------------------------------------------------------------
test1();
test2();
//-----------------------------------------------------------------------------

function test1()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  (function() { eval("(function() { })"); })();

  reportCompare(expect, actual, summary + ': nested 1');

  exitFunc ('test');
}

function test2()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  (function () {(function() { eval("(function() { })"); })();})();

  reportCompare(expect, actual, summary + ': nested 2');

  exitFunc ('test');
}
