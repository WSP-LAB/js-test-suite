load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
load("0d758d18a3e8b050616f2dc19c057b0c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 489682;
var summary = 'TM: wrong number with nested type-unstable loops';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);


var v = 0;

for each (var a in [0, {}, {}, {}]) {
  print(v);
  v = v >>> 0;
  for each (var b in [{}, {}, new String(''), 42, new String(''), {}, 42]) 
           {
           }
         }
print(v);


expect = '0';
actual = v + '';

reportCompare(expect, actual, summary);
