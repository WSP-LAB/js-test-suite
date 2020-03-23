load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 326466;
var summary = 'Implement Pythonic generators and iteration protocol support';
var actual;
var expect;

printBugNumber(BUGNUMBER);
printStatus (summary);
 
function fib()
{
  var a = 0, b = 1;

  while (true)
  {
    yield a;
    var t = a;
    a = b;
    b += t;
  }
}

var g = fib();

expect = '[object Generator]';
actual = g.toString();
reportCompare(expect, actual, summary);

var actual = [];
var expect = [0, 1, 1, 2, 3, 5, 8, 13];
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
actual.push(g.next());
reportCompare(expect.join(), actual.join(), summary);

