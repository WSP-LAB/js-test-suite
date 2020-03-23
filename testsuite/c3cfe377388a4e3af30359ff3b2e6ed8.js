load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.3-1.js
   ECMA Section:       15.9.5.3-1 Date.prototype.valueOf
   Description:

   The valueOf function returns a number, which is this time value.

   The valueOf function is not generic; it generates a runtime error if
   its this value is not a Date object.  Therefore it cannot be transferred
   to other kinds of objects for use as a method.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.3-1-n";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Date.prototype.valueOf";

writeHeaderToLog( SECTION + " "+ TITLE);

var OBJ = new MyObject( new Date(0) );

DESCRIPTION = "var OBJ = new MyObject( new Date(0) ); OBJ.valueOf()";
EXPECTED = "error";

new TestCase( SECTION,
	      "var OBJ = new MyObject( new Date(0) ); OBJ.valueOf()",
	      "error",
	      eval("OBJ.valueOf()") );
test();

function MyObject( value ) {
  this.value = value;
  this.valueOf = Date.prototype.valueOf;
//  The following line causes an infinte loop
//    this.toString = new Function( "return this+\"\";");
  return this;
}
