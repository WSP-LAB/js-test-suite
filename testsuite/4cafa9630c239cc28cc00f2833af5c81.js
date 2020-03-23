load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that the object returned by Intl.Collator.prototype.resolvedOptions
 *     has the right properties.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var actual = new Intl.Collator().resolvedOptions();

var actual2 = new Intl.Collator().resolvedOptions();
if (actual2 === actual) {
    $ERROR("resolvedOptions returned the same object twice.");
}

// source: CLDR file common/bcp47/collation.xml; version CLDR 21.
var collations = [
    "default", // added
    "big5han", 
    "dict",
    "direct",
    "ducet",
    "gb2312",
    "phonebk",
    "phonetic",
    "pinyin",
    "reformed",
    // "search", // excluded
    "searchjl",
    // "standard", // excluded
    "stroke",
    "trad",
    "unihan"
];

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "usage", ["sort"]);
mustHaveProperty(actual, "sensitivity", ["variant"]);
mustHaveProperty(actual, "ignorePunctuation", [false]);
mustHaveProperty(actual, "collation", collations);
mayHaveProperty(actual, "numeric", [true, false]);
mayHaveProperty(actual, "caseFirst", ["upper", "lower", "false"]);

