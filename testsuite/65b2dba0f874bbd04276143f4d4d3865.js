load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6514743a8e7bff37c677024099be3de1.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 309840;
var summary = 'Treat / in a literal regexp class as valid';
var actual = 'No error';
var expect = 'No error';

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
