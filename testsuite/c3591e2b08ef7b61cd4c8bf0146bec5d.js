load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that values other than strings are not accepted as locales.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var notStringOrObject = [undefined, null, true, false, 0, 5, -5, NaN];

testWithIntlConstructors(function (Constructor) {
    notStringOrObject.forEach(function (value) {
        var error;
        try {
            var supported = Constructor.supportedLocalesOf([value]);
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("" + value + " as locale was not rejected.");
        } else if (error.name !== "TypeError") {
            $ERROR("" + value + " as locale was rejected with wrong error " + error.name + ".");
        }
    });
    
    return true;
});

