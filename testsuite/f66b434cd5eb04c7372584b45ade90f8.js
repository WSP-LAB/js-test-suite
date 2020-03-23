load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 261886;
var summary = 'Always evaluate delete operand expression';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

var o = {a:1};

expect = 2;
try
{
  delete ++o.a;
  actual = o.a;
}
catch(e)
{
  actual = o.a;
  summary += ' ' + e;
}
 
reportCompare(expect, actual, summary);
