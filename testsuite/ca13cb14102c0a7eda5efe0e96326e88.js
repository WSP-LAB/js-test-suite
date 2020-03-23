load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
load("0d758d18a3e8b050616f2dc19c057b0c.js");
// |reftest| skip -- bogus perf test (bug 540512)
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 451974;
var summary = 'TM: loops with anon functions should not be slower with jit enabled';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

var chars = '0123456789abcdef';
var size = 10000;
var mult = 1000;
var densearray = [];
var lsize = size;

while (lsize--) 
{ 
  densearray.push(chars); 
}

function loop()
{
  var start = new Date();

  for (var a = 0; a < mult; a++) 
  {
    var f = (function(x){}); 
    for (var i = 0, len = densearray.length; i < len; i++) 
    { 
      f(densearray[i]); 
    }
  }

  var stop = new Date();
  return stop - start;
}

var timenonjit = loop();
var timejit = loop();

print('time: nonjit = ' + timenonjit + ', jit = ' + timejit);

expect = true;
actual = timejit < timenonjit/2;

reportCompare(expect, actual, summary);
