load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the compare function isn't entirely unreasonable.
 *     This test is not normative.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

// this test should be valid at least for the following locales
var locales = ["de", "en", "es", "fr", "it"];
locales = Intl.Collator.supportedLocalesOf(locales, {localeMatcher: "lookup"});
locales.forEach(function (locale) {
    var collator = new Intl.Collator([locale], {sensitivity: "variant", localeMatcher: "lookup"});
    var a = ["L", "X", "C", "k", "Z", "H", "d", "m", "w", "A", "i", "f", "y", "E", "N", "V", "g", "J", "b"];
    a.sort(collator.compare);
    var expected = ["A", "b", "C", "d", "E", "f", "g", "H", "i", "J", "k", "L", "m", "N", "V", "w", "X", "y", "Z"];
    testArraysAreSame(expected, a);
});

