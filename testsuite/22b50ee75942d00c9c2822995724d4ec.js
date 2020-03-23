load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("d3f509a059ad5596f8ab0d79602c5955.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 476624;
var summary = '[[DefaultValue]] should not call valueOf, toString with an argument';
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

  expect = actual = 'No exception';

  try
  { 
    var o = { 
    valueOf: function() 
    { 
        if (arguments.length !== 0) 
          throw "unexpected arguments!  arg1 type=" + typeof arguments[0] + ", value=" +
            arguments[0]; 
        return 2; 
    } 
    };
    o + 3;
  }
  catch(ex)
  {
    actual = ex + '';
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
