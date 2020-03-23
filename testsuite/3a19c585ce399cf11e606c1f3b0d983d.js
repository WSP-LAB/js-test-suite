load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 255555;
var summary = 'Array.prototype.sort(comparefn) never passes undefined to comparefn';
var actual = 'not undefined';
var expect = 'not undefined';

printBugNumber(BUGNUMBER);
printStatus (summary);
 
function comparefn(a,b)
{
  if (typeof a == 'undefined')
  {
    actual = 'undefined';
    return 1;
  }
  if (typeof b == 'undefined')
  {
    actual = 'undefined';
    return -1;
  }
  return a - b;
}

var arry = [ 1, 2, undefined ].sort(comparefn)

  reportCompare(expect, actual, summary);
