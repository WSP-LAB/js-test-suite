load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
// |reftest| skip -- obsolete test
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 173067;
var summary = 'Properly report / in a literal regexp class as an error';
var actual = '';
var expect = 'SyntaxError: unterminated character class ';

printBugNumber(BUGNUMBER);
printStatus (summary);

try
{ 
  var re = eval('/[/]/');
}
catch(e)
{
  actual = e.toString();
}

reportCompare(expect, actual, summary);
