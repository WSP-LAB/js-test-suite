load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.3.2_CS_c_NN
description: >
    Tests that the compare function supports phonebook sorting if it
    says it does.  This test is not normative.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

// this test should be valid at least for the following locales
var locales = ["de-DE-u-co-phonebk", "de-u-co-phonebk"];
var collator = new Intl.Collator(locales, {localeMatcher: "lookup"});
if (locales.indexOf(collator.resolvedOptions().locale) !== -1) {
    var a = ["A", "b", "Af", "Ab", "od", "off", "Ä", "ö"];
    a.sort(collator.compare);
    var expected = ["A", "Ab", "Ä", "Af", "b", "od", "ö", "off"];
    testArraysAreSame(expected, a);
}
