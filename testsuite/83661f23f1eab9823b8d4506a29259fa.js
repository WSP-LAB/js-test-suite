load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          expressions-003.js
   Corresponds to:     ecma/Expressions/11.2.1-3-n.js
   ECMA Section:       11.2.1 Property Accessors
   Description:

   Try to access properties of an object whose value is undefined.

   Author:             christine@netscape.com
   Date:               09 september 1998
*/
var SECTION = "expressions-003.js";
var VERSION = "JS1_4";
var TITLE   = "Property Accessors";
writeHeaderToLog( SECTION + " "+TITLE );

startTest();

// try to access properties of primitive types

OBJECT = new Property(  "undefined",    void 0,   "undefined",   NaN );

var result    = "Failed";
var exception = "No exception thrown";
var expect    = "Passed";

try {
  result = OBJECT.value.toString();
} catch ( e ) {
  result = expect;
  exception = e.toString();
}


new TestCase(
  SECTION,
  "Get the toString value of an object whose value is undefined "+
  "(threw " + exception +")",
  expect,
  result );

test();

function Property( object, value, string, number ) {
  this.object = object;
  this.string = String(value);
  this.number = Number(value);
  this.value = value;
}
