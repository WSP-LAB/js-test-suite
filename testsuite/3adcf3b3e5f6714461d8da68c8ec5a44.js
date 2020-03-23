load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 482421;
var summary = 'TM: Do not assert: vp >= StackBase(fp)';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);


function f()
{
  var x;
  var foo = "for (var z = 0; z < 2; ++z) { new Object(new String(this), x)}";
  foo.replace(/\n/g, " ");
  eval(foo);
}
f();


reportCompare(expect, actual, summary);
