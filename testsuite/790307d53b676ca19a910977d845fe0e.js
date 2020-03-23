load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("e61db04c7f35aa37aeeb2dfa021f4d7c.js");
load("081fee6ebaffe3bf21b8245a5e67db7e.js");
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla Communicator client code, released
 * March 31, 1998.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = '15.9.5.34-1.js';

/**
   File Name:          15.9.5.34-1.js
   ECMA Section:       15.9.5.34 Date.prototype.setMonth(mon [, date ] )
   Description:
   If date is not specified, this behaves as if date were specified with the
   value getDate( ).

   1.  Let t be the result of LocalTime(this time value).
   2.  Call ToNumber(date).
   3.  If date is not specified, compute DateFromTime(t); otherwise, call ToNumber(date).
   4.  Compute MakeDay(YearFromTime(t), Result(2), Result(3)).
   5.  Compute UTC(MakeDate(Result(4), TimeWithinDay(t))).
   6.  Set the [[Value]] property of the this value to TimeClip(Result(5)).
   7.  Return the value of the [[Value]] property of the this value.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "15.9.5.34-1";
var VERSION = "ECMA_1";
startTest();

writeHeaderToLog( SECTION + " Date.prototype.setMonth(mon [, date ] )");

getFunctionCases();

// regression test for http://scopus.mcom.com/bugsplat/show_bug.cgi?id=112404
d = new Date(0);
d.setMonth(1,1,1,1,1,1);

addNewTestCase(
  "TDATE = new Date(0); TDATE.setMonth(1,1,1,1,1,1); TDATE",
  UTCDateFromTime(SetMonth(0,1,1)),
  LocalDateFromTime(SetMonth(0,1,1)) );


// whatever today is

addNewTestCase( "TDATE = new Date(TIME_NOW); (TDATE).setMonth(11,31); TDATE",
		UTCDateFromTime(SetMonth(TIME_NOW,11,31)),
		LocalDateFromTime(SetMonth(TIME_NOW,11,31)) );

// 1970

addNewTestCase( "TDATE = new Date(0);(TDATE).setMonth(0,1);TDATE",
		UTCDateFromTime(SetMonth(0,0,1)),
		LocalDateFromTime(SetMonth(0,0,1)) );

addNewTestCase( "TDATE = new Date("+TIME_1900+"); "+
		"(TDATE).setMonth(11,31); TDATE",
		UTCDateFromTime( SetMonth(TIME_1900,11,31) ),
		LocalDateFromTime( SetMonth(TIME_1900,11,31) ) );

test();

function addNewTestCase( DateString, UTCDate, LocalDate) {
  DateCase = eval( DateString );

  new TestCase( SECTION, DateString+".getTime()",             UTCDate.value,       DateCase.getTime() );
  new TestCase( SECTION, DateString+".valueOf()",             UTCDate.value,       DateCase.valueOf() );

  new TestCase( SECTION, DateString+".getUTCFullYear()",      UTCDate.year,    DateCase.getUTCFullYear() );
  new TestCase( SECTION, DateString+".getUTCMonth()",         UTCDate.month,  DateCase.getUTCMonth() );
  new TestCase( SECTION, DateString+".getUTCDate()",          UTCDate.date,   DateCase.getUTCDate() );
  new TestCase( SECTION, DateString+".getUTCDay()",           UTCDate.day,    DateCase.getUTCDay() );
  new TestCase( SECTION, DateString+".getUTCHours()",         UTCDate.hours,  DateCase.getUTCHours() );
  new TestCase( SECTION, DateString+".getUTCMinutes()",       UTCDate.minutes,DateCase.getUTCMinutes() );
  new TestCase( SECTION, DateString+".getUTCSeconds()",       UTCDate.seconds,DateCase.getUTCSeconds() );
  new TestCase( SECTION, DateString+".getUTCMilliseconds()",  UTCDate.ms,     DateCase.getUTCMilliseconds() );

  new TestCase( SECTION, DateString+".getFullYear()",         LocalDate.year,       DateCase.getFullYear() );
  new TestCase( SECTION, DateString+".getMonth()",            LocalDate.month,      DateCase.getMonth() );
  new TestCase( SECTION, DateString+".getDate()",             LocalDate.date,       DateCase.getDate() );
  new TestCase( SECTION, DateString+".getDay()",              LocalDate.day,        DateCase.getDay() );
  new TestCase( SECTION, DateString+".getHours()",            LocalDate.hours,      DateCase.getHours() );
  new TestCase( SECTION, DateString+".getMinutes()",          LocalDate.minutes,    DateCase.getMinutes() );
  new TestCase( SECTION, DateString+".getSeconds()",          LocalDate.seconds,    DateCase.getSeconds() );
  new TestCase( SECTION, DateString+".getMilliseconds()",     LocalDate.ms,         DateCase.getMilliseconds() );

  DateCase.toString = Object.prototype.toString;

  new TestCase( SECTION,
		DateString+".toString=Object.prototype.toString;"+DateString+".toString()",
		"[object Date]",
		DateCase.toString() );
}

function getFunctionCases() {
  // some tests for all functions
  new TestCase(
    SECTION,
    "Date.prototype.setMonth.length",
    2,
    Date.prototype.setMonth.length );

  new TestCase(
    SECTION,
    "typeof Date.prototype.setMonth",
    "function",
    typeof Date.prototype.setMonth );

}

function MyDate() {
  this.year = 0;
  this.month = 0;
  this.date = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.ms = 0;
}
function LocalDateFromTime(t) {
  t = LocalTime(t);
  return ( MyDateFromTime(t) );
}
function UTCDateFromTime(t) {
  return ( MyDateFromTime(t) );
}
function MyDateFromTime( t ) {
  var d = new MyDate();
  d.year = YearFromTime(t);
  d.month = MonthFromTime(t);
  d.date = DateFromTime(t);
  d.hours = HourFromTime(t);
  d.minutes = MinFromTime(t);
  d.seconds = SecFromTime(t);
  d.ms = msFromTime(t);

  d.time = MakeTime( d.hours, d.minutes, d.seconds, d.ms );
  d.value = TimeClip( MakeDate( MakeDay( d.year, d.month, d.date ), d.time ) );
  d.day = WeekDay( d.value );

  return (d);
}
function SetMonth( t, mon, date ) {
  var TIME = LocalTime(t);
  var MONTH = Number( mon );
  var DATE = ( date == void 0 ) ? DateFromTime(TIME) : Number( date );
  var DAY = MakeDay( YearFromTime(TIME), MONTH, DATE );
  return ( TimeClip (UTC(MakeDate( DAY, TimeWithinDay(TIME) ))) );
}