load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 315147;
var summary = 'Error JSMSG_UNDEFINED_PROP should be JSEXN_REFERENCEERR';
var actual = '';
var expect = 'ReferenceError';

printBugNumber(BUGNUMBER);
printStatus (summary);

if (!options().match(/strict/))
{
  options('strict');
}
if (!options().match(/werror/))
{
  options('werror');
}

var o = {};

try
{
  o.foo;
  actual = 'no error';
}
catch(ex)
{
  actual = ex.name;
}
 
reportCompare(expect, actual, summary);
