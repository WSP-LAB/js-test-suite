load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          lexical-003.js
   Corresponds To:     7.3-13-n.js
   ECMA Section:       7.3 Comments
   Description:

   Author:             christine@netscape.com
   Date:               12 november 1997

*/
var SECTION = "lexical-003.js";
var VERSION = "JS1_4";
var TITLE   = "Comments";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  eval("/*\n/* nested comment */\n*/\n");
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "/*/*nested comment*/ */" +
  " (threw " + exception +")",
  expect,
  result );

test();

