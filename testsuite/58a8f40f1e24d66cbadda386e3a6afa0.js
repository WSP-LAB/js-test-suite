load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that additional time zone names, if accepted, are handled correctly.
 * @author Norbert Lindenberg
 */

// canonicalization specified in conformance clause
var additionalTimeZoneNames = {
    "Etc/GMT": "UTC",
    "Greenwich": "UTC",
    "PRC": "Asia/Shanghai",
    "AmErIcA/LoS_aNgElEs": "America/Los_Angeles",
    "etc/gmt+7": "Etc/GMT+7"
};

Object.getOwnPropertyNames(additionalTimeZoneNames).forEach(function (name) {
    var format, error;
    try {
        format = new Intl.DateTimeFormat([], {timeZone: name});
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        var actual = format.resolvedOptions().timeZone;
        var expected = additionalTimeZoneNames[name];
        if (actual !== expected) {
            $ERROR("Time zone name " + name + " was accepted, but incorrectly canonicalized to " +
                actual + "; expected " + expected + ".");
        }
    } else if (error.name !== "RangeError") {
        $ERROR("Time zone name " + name + " was rejected with wrong error " + error.name + ".");
    }
});

