load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
// |reftest| skip -- never terminates
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 271716;
var summary = 'Don\'t Crash on infinite loop creating new Arrays';
var actual = 'Crash';
var expect = 'No Crash';

printBugNumber(BUGNUMBER);
printStatus (summary);
 
try
{
  a = new Array();
  while (1) a = new Array(a);
  actual = 'No Crash';
}
catch(e)
{
  actual = 'No Crash';
}

reportCompare(expect, actual, summary);