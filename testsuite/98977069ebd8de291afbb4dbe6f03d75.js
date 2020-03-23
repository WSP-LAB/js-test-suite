load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that format handles non-finite values correctly.
 * @author Norbert Lindenberg
 */

var invalidValues = [NaN, Infinity, -Infinity];

var format = new Intl.DateTimeFormat();

invalidValues.forEach(function (value) {
    var error;
    try {
        var result = format.format(value);
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Invalid value " + value + " was not rejected.");
    } else if (error.name !== "RangeError") {
        $ERROR("Invalid value " + value + " was rejected with wrong error " + error.name + ".");
    }
});

