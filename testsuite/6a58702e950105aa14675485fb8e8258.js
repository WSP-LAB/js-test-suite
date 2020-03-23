load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
// |reftest| skip -- obsolete test
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 249211;
var summary = 'support export and import for 4xp';
var actual = '';
var expect = 'no error';

printBugNumber(BUGNUMBER);
printStatus (summary);
 
try
{
  var o = {};
  var f = function(){};
  export *;
  import o.*;
  actual = 'no error';
}
catch(e)
{
  actual = 'error';
}

reportCompare(expect, actual, summary);

