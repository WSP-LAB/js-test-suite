load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("5df59863d90268eb6e10a53e77fee656.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 481989;
var summary = 'TM: Do not assert: SPROP_HAS_STUB_SETTER(sprop)';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);


y = this.watch("x", function(){}); for each (let y in ['', '']) x = y;


reportCompare(expect, actual, summary);
