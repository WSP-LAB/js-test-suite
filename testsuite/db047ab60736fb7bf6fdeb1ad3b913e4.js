load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 328664;
var summary = 'Correct error message for funccall(undefined, undefined.prop)';
var actual = '';
var expect = /TypeError: value.parameters (has no properties|is undefined)/;

printBugNumber(BUGNUMBER);
printStatus (summary);
 
var value = {};

function funccall(a,b)
{
}

try
{
  funccall(value[1], value.parameters[1]);
}
catch(ex)
{
  printStatus(ex);
  actual = ex + '';
}

reportMatch(expect, actual, summary);
