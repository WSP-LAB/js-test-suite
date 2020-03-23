load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          global-002
   Corresponds To:     ecma/GlobalObject/15.1-2-n.js
   ECMA Section:       The global object
   Description:

   The global object does not have a [[Construct]] property; it is not
   possible to use the global object as a constructor with the new operator.


   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "global-002";
var VERSION = "JS1_4";
var TITLE   = "The Global Object";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  result = this();
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "result = this()" +
  " (threw " + exception +")",
  expect,
  result );

test();
