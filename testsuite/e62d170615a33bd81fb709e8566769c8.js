load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 294195;
var summary = 'Do not crash during String replace when accessing methods on backreferences';
var actual = 'No Crash';
var expect = 'No Crash';

printBugNumber(BUGNUMBER);
printStatus (summary);

var s = 'some text sample';

// this first version didn't crash
var result = s.replace(new RegExp('(^|\\s)(text)'), (new String('$1')));
result = result.substr(0, 1);
reportCompare(expect, actual, inSection(1) + ' ' + summary);

// the original version however did crash.
result = s.replace(new RegExp('(^|\\s)(text)'),
                   (new String('$1')).substr(0, 1));
reportCompare(expect, actual, inSection(2) + ' ' + summary);
