load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 474771;
var summary = 'TM: do not assert: jumpTable == interruptJumpTable';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);


this.__defineSetter__('x', function(){});
for (var j = 0; j < 5; ++j) { x = 3; }


reportCompare(expect, actual, summary);
