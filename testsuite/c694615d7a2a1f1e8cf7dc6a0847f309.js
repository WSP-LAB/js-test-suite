load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
// |reftest| skip-if(Android)
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 479430;
var summary = 'Missing operation callback checks';
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

  if (typeof timeout == 'function')
  {
    expectExitCode(6);

    timeout(0.01);

    function f(n)
    {
      if (n != 0) {
        try { f(n - 1); } catch (e) {}
        try { f(n - 1); } catch (e) {}
      }
      throw 0;
    }

    f(100);

  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
