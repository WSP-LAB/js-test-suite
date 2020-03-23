load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.3.2_CS_b_NN
description: >
    Tests that the compare function isn't entirely unreasonable.  This
    test is not normative.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

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
