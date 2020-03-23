load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that appropriate fallback locales are provided for
 *     supported locales.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    var info = getLocaleSupportInfo(Constructor);
    var fallback;
    info.supported.forEach(function (locale) {
        var pos = locale.lastIndexOf("-");
        if (pos !== -1) {
            fallback = locale.substring(0, pos);
            if (info.supported.indexOf(fallback) === -1) {
                $ERROR("Locale " + locale + " is supported, but fallback " + fallback + " isn't.");
            }
        }
        var match = /([a-z]{2,3})(-[A-Z][a-z]{3})(-[A-Z]{2})/.exec(locale);
        if (match !== null) {
            fallback = match[1] + match[3];
            if (info.supported.indexOf(fallback) === -1) {
                $ERROR("Locale " + locale + " is supported, but fallback " + fallback + " isn't.");
            }
        }
    });
});

