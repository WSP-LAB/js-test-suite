load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 452498;
var summary = 'TM: upvar2 regression tests';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

// ------- Comment #129 From Gary Kwong [:nth10sd]

// Does not require -j:
// =====
try {
    eval("({ set x x () { for(x in function(){}){}}  })");
} catch (e)
{
}

// Assertion failure: JOF_OPTYPE(op) == JOF_ATOM, at ../jsemit.cpp:1710
// =====

try
{
    (function (){ eval("(function(){delete !function(){}});"); })();
}
catch(ex)
{
}
// Debug crash [@ JSParseNode::isFunArg] at null
// Opt crash [@ FindFunArgs] near null
// =====

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
