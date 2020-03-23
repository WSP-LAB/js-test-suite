load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 311515;
var summary = 'Array.sort should skip holes and undefined during sort';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

var a = [, 1, , 2, undefined];

actual = a.sort().toString();
expect = '1,2,,,'; 

reportCompare(expect, actual, summary);
