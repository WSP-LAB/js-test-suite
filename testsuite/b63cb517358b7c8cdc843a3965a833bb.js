load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that LookupSupportedLocales includes the default locale
 *     and doesn't include the "no linguistic content" locale.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    // this test should work equally for both matching algorithms
    ["lookup", "best fit"].forEach(function (matcher) {
        var defaultLocale = new Constructor().resolvedOptions().locale;
        var noLinguisticContent = "zxx";
        var supported = Constructor.supportedLocalesOf([defaultLocale, noLinguisticContent],
            {localeMatcher: matcher});
        if (supported.indexOf(defaultLocale) === -1) {
            $ERROR("SupportedLocales didn't return default locale with matcher " + matcher + ".");
        }
        if (supported.indexOf(noLinguisticContent) !== -1) {
            $ERROR("SupportedLocales returned the \"no linguistic content\" locale with matcher " + matcher + ".");
        }
        if (supported.length > 1) {
            $ERROR("SupportedLocales returned stray locales: " + supported.join(", ") + " with matcher " + matcher + ".");
        }
    });

    return true;
});

