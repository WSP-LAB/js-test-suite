load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6514743a8e7bff37c677024099be3de1.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 368516;
var summary = 'Treat unicode BOM characters as whitespace';
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
 
  var bomchars = ['\uFFFE',
                  '\uFEFF'];

  for (var i = 0; i < bomchars.length; i++)
  {
    expect = 'howdie';
    actual = '';

    try
    {
      eval("var" + bomchars[i] + "hithere = 'howdie';");
      actual = hithere;
    }
    catch(ex)
    {
      actual = ex + '';
    }

    reportCompare(expect, actual, summary + ': ' + i);
  }

  exitFunc ('test');
}
