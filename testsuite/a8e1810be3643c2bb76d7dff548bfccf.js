load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 349012;
var summary = 'generators with nested try finally blocks';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  expect = "[object StopIteration]";
  var expectyield   = "12";
  var expectfinally = "Inner finally,Outer finally";
  var actualyield = "";
  var actualfinally = "";

  function gen()
  {
    try {
      try {
        yield 1;
      } finally {
        actualfinally += "Inner finally";
        yield 2;
      }
    } finally {
      actualfinally += ",Outer finally";
    }
  }

  var iter = gen();
  actualyield += iter.next();
  actualyield += iter.next();
  try
  {
    actualyield += iter.next();
    actual = "No exception";
  }
  catch(ex)
  {
    actual = ex + '';
  }
 
  reportCompare(expect, actual, summary);
  reportCompare(expectyield, actualyield, summary);
  reportCompare(expectfinally, actualfinally, summary);

  exitFunc ('test');
}
