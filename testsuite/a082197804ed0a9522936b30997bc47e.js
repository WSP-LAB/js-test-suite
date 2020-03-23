load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 469239;
var summary = 'TM: Do not assert: ATOM_IS_STRING(atom)';
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


  for (let b=0;b<9;++b) {
    for each (let h in [33, 3, /x/]) {
	for each (c in [[], [], [], /x/]) {
	    '' + c;
	  }
      }
  }


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
