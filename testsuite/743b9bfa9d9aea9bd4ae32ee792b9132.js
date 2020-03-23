load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the compare function supports phonebook sorting if it says it does.
 *     This test is not normative.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

// this test should be valid at least for the following locales
var locales = ["de-DE-u-co-phonebk", "de-u-co-phonebk"];
var collator = new Intl.Collator(locales, {localeMatcher: "lookup"});
if (locales.indexOf(collator.resolvedOptions().locale) !== -1) {
    var a = ["A", "b", "Af", "Ab", "od", "off", "Ä", "ö"];
    a.sort(collator.compare);
    var expected = ["A", "Ab", "Ä", "Af", "b", "od", "ö", "off"];
    testArraysAreSame(expected, a);
}

