load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that invalid time zone names are not accepted.
 * @author Norbert Lindenberg
 */

var invalidTimeZoneNames = [
    "",
    "MEZ", // localized abbreviation
    "Pacific Time", // localized long form
    "cnsha", // BCP 47 time zone code
    "invalid", // as the name says
    "Europe/İstanbul", // non-ASCII letter
    "asıa/baku", // non-ASCII letter
    "europe/brußels"  // non-ASCII letter
];

invalidTimeZoneNames.forEach(function (name) {
    var error;
    try {
        // this must throw an exception for an invalid time zone name
        var format = new Intl.DateTimeFormat(["de-de"], {timeZone: name});
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Invalid time zone name " + name + " was not rejected.");
    } else if (error.name !== "RangeError") {
        $ERROR("Invalid time zone name " + name + " was rejected with wrong error " + error.name + ".");
    }
});

