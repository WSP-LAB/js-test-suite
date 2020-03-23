load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.DateTimeFormat can be subclassed.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

// get a date-time format and have it format an array of dates for comparison with the subclass
var locales = ["tlh", "id", "en"];
var a = [new Date(0), Date.now(), new Date(Date.parse("1989-11-09T17:57:00Z"))];
var referenceDateTimeFormat = new Intl.DateTimeFormat(locales);
var referenceFormatted = a.map(referenceDateTimeFormat.format);

function MyDateTimeFormat(locales, options) {
    Intl.DateTimeFormat.call(this, locales, options);
    // could initialize MyDateTimeFormat properties
}

MyDateTimeFormat.prototype = Object.create(Intl.DateTimeFormat.prototype);
MyDateTimeFormat.prototype.constructor = MyDateTimeFormat;
// could add methods to MyDateTimeFormat.prototype

var format = new MyDateTimeFormat(locales);
var actual = a.map(format.format);
testArraysAreSame(referenceFormatted, actual);

