load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 396326;
var summary = 'Do not assert trying to disassemble get(var|arg) prop';
var actual = 'No Crash';
var expect = 'No Crash';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  if (typeof dis == 'undefined')
  {
    print('disassembly not supported. test skipped.');
    reportCompare(expect, actual, summary);
  }
  else
  {
    function f4() { let local; return local.prop }; 
    dis(f4);
    reportCompare(expect, actual, summary + 
                  ': function f4() { let local; return local.prop };');
  }

  exitFunc ('test');
}
