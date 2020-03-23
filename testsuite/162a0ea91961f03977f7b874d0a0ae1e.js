load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that locales that are reported by resolvedOptions
 *     are also reported by supportedLocalesOf.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    var info = getLocaleSupportInfo(Constructor);
    // this test should work equally for both matching algorithms
    ["lookup", "best fit"].forEach(function (matcher) {
        var supportedByConstructor = info.supported.concat(info.byFallback);
        var supported = Constructor.supportedLocalesOf(supportedByConstructor,
            {localeMatcher: matcher});
        // we could check the length first, but it's probably more interesting which locales are missing
        var i = 0;
        var limit = Math.min(supportedByConstructor.length, supported.length);
        while (i < limit && supportedByConstructor[i] === supported[i]) {
            i++;
        }
        if (i < supportedByConstructor.length) {
            $ERROR("Locale " + supportedByConstructor[i] +
                " is returned by resolvedOptions but not by supportedLocalesOf.");
        } else if (i < supported.length) {
            $ERROR("Locale " + supported[i] +
                " is returned by supportedLocalesOf but not by resolvedOptions.");
        }
    });
    
    // this test is only valid for lookup - best fit may find additional locales supported
    var unsupportedByConstructor = info.unsupported;
    var supported = Constructor.supportedLocalesOf(unsupportedByConstructor,
            {localeMatcher: "lookup"});
    if (supported.length > 0) {
        $ERROR("Locale " + supported[0] +
            " is returned by supportedLocalesOf but not by resolvedOptions.");
    }

    return true;
});

