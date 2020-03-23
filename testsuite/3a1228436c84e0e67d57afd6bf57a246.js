load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
// testcase by Gianugo Rabellino <gianugo@apache.org>
var BUGNUMBER = 276103;
var summary = 'link foo and null bytes';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);
 

var testString = "test|string";
var idx = testString.indexOf("|");
var link = testString.substring(0, idx);
var desc = testString.substring(idx + 1);

expect = '<a href="test">string</a>';
actual = desc.link(link);

reportCompare(expect, actual, summary);

