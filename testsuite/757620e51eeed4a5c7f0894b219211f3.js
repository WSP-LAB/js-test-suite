load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:
 *  Reference:          http://bugzilla.mozilla.org/show_bug.cgi?id=4088
 *  Description:        Date parsing gets 12:30 AM wrong.
 *  New behavior:
 *  js> d = new Date('1/1/1999 13:30 AM')
 * Invalid Date
 * js> d = new Date('1/1/1999 13:30 PM')
 * Invalid Date
 * js> d = new Date('1/1/1999 12:30 AM')
 * Fri Jan 01 00:30:00 GMT-0800 (PST) 1999
 * js> d = new Date('1/1/1999 12:30 PM')
 * Fri Jan 01 12:30:00 GMT-0800 (PST) 1999
 *  Author:             christine@netscape.com
 */

var SECTION = "15.9.4.2-1";       // provide a document reference (ie, ECMA section)
var VERSION = "ECMA"; // Version of JavaScript or ECMA
var TITLE   = "Regression Test for Date.parse";       // Provide ECMA section title or a description
var BUGNUMBER = "http://bugzilla.mozilla.org/show_bug.cgi?id=4088";     // Provide URL to bugsplat or bugzilla report

startTest();               // leave this alone

AddTestCase( "new Date('1/1/1999 12:30 AM').toString()",
	     new Date(1999,0,1,0,30).toString(),
	     new Date('1/1/1999 12:30 AM').toString() );

AddTestCase( "new Date('1/1/1999 12:30 PM').toString()",
	     new Date( 1999,0,1,12,30 ).toString(),
	     new Date('1/1/1999 12:30 PM').toString() );

AddTestCase( "new Date('1/1/1999 13:30 AM')",
	     "Invalid Date",
	     new Date('1/1/1999 13:30 AM').toString() );


AddTestCase( "new Date('1/1/1999 13:30 PM')",
	     "Invalid Date",
	     new Date('1/1/1999 13:30 PM').toString() );

test();       // leave this alone.  this executes the test cases and
// displays results.
