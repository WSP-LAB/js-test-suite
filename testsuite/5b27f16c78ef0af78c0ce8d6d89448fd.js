load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 349012;
var summary = 'generator recursively calling itself via send is a TypeError';
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

  function gen() {
    var iter = yield;
    try {
      iter.send(1);
    } catch (e) {
      yield e;
    }
  }

  expect = true;
  var iter = gen();
  iter.next();
  var ex = iter.send(iter);
  print(ex + '');
  actual = (ex instanceof TypeError);

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
