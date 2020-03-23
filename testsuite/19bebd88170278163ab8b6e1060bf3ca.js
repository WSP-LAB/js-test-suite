load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the option localeMatcher is processed correctly.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    
    var validValues = [undefined, "lookup", "best fit", {toString: function () { return "lookup"; }}];
    validValues.forEach(function (value) {
        var supported = Constructor.supportedLocalesOf([defaultLocale], {localeMatcher: value});
    });
    
    var invalidValues = [null, 0, 5, NaN, true, false, "invalid"];
    invalidValues.forEach(function (value) {
        var error;
        try {
            var supported = Constructor.supportedLocalesOf([defaultLocale], {localeMatcher: value});
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("Invalid localeMatcher value " + value + " was not rejected.");
        } else if (error.name !== "RangeError") {
            $ERROR("Invalid localeMatcher value " + value + " was rejected with wrong error " + error.name + ".");
        }
    });
    
    return true;
});

