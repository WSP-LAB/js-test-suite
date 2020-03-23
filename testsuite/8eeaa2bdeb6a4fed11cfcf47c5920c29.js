load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 313567;
var summary = 'String.prototype.length should not be generic';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

var s = new String("1");
s.toString = function() {
  return "22";
}
  var expect = 1;
var actual = s.length;
printStatus("expect="+expect+" actual="+actual);
 
reportCompare(expect, actual, summary);
