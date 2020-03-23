load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jesse Ruderman
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 521456;
var summary =
  'Incorrect decompilation of new (eval(v)).s and new (f.apply(2)).s';
printBugNumber(BUGNUMBER);
printStatus(summary);

function foo(c) { return new (eval(c)).s; }
function bar(f) { var a = new (f.apply(2).s); return a; }

assertEq(bar.toString().search(/new\s+f/), -1);
assertEq(foo.toString().search(/new\s+eval/), -1);

reportCompare(true, true);
