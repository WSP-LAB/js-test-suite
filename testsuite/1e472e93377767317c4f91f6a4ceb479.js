load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.10.js
   ECMA Section:       15.9.5.10
   Description:        Date.prototype.getDate

   1.Let t be this time value.
   2.If t is NaN, return NaN.
   3.Return DateFromTime(LocalTime(t)).

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.10";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Date.prototype.getDate()";

writeHeaderToLog( SECTION + " "+ TITLE);

// some daylight savings time cases

var DST_START_1998 = GetDSTStart(TimeFromYear(1998));

addTestCase( DST_START_1998+1 );

new TestCase( SECTION,
	      "(new Date(NaN)).getDate()",
	      NaN,
	      (new Date(NaN)).getDate() );

new TestCase( SECTION,
	      "Date.prototype.getDate.length",
	      0,
	      Date.prototype.getDate.length );
test();

function addTestCase( t ) {
  var start = TimeFromYear(YearFromTime(t));
  var stop  = TimeFromYear(YearFromTime(t) + 1);

  for (var d = start; d < stop; d += msPerDay)
  {
    new TestCase( SECTION,
                  "(new Date("+d+")).getDate()",
                  DateFromTime(LocalTime(d)),
                  (new Date(d)).getDate() );
  }
}
