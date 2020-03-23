load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 350312;
var summary = 'Accessing wrong stack slot with nested catch/finally';
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

  var tmp;

  function f()
  {
    try {  
      try {  
	throw 1;
      } catch (e) {
	throw e;
      } finally {
	tmp = true;
      }
    } catch (e) {
      return e;
    }
  }

  var ex = f();

  var passed = ex === 1;
  if (!passed) {
    print("Failed!");
    print("ex="+uneval(ex));
  }
  reportCompare(true, passed, summary);

  exitFunc ('test');
}
