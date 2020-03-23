load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that valid time zone names are accepted.
 * @author Norbert Lindenberg
 */

var validTimeZoneNames = [
    "UTC",
    "utc" // time zone names are case-insensitive
];

validTimeZoneNames.forEach(function (name) {
    // this must not throw an exception for a valid time zone name
    var format = new Intl.DateTimeFormat(["de-de"], {timeZone: name});
    if (format.resolvedOptions().timeZone !== name.toUpperCase()) {
        $ERROR("Time zone name " + name + " was not correctly accepted; turned into " +
            format.resolvedOptions().timeZone + ".");
    }
});

