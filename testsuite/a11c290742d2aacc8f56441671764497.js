load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
// |reftest| skip -- obsolete test
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          lexical-010.js
   Corresponds To:     7.4.3-3-n.js
   ECMA Section:       7.4.3

   Description:
   The following words are used as keywords in proposed extensions and are
   therefore reserved to allow for the possibility of future adoption of
   those extensions.

   FutureReservedWord :: one of
   case    debugger    export      super
   catch   default     extends     switch
   class   do          finally     throw
   const   enum        import      try

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "lexical-010";
var VERSION = "ECMA_1";
var TITLE   = "Future Reserved Words";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  eval("export = true;");
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "export = true" +
  " (threw " + exception +")",
  expect,
  result );

test();
