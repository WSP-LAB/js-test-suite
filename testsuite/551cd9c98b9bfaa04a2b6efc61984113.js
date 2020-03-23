load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that the object returned by Intl.NumberFormat.prototype.resolvedOptions
 *     has the right properties.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var actual = new Intl.NumberFormat().resolvedOptions();

var actual2 = new Intl.NumberFormat().resolvedOptions();
if (actual2 === actual) {
    $ERROR("resolvedOptions returned the same object twice.");
}

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "numberingSystem", isValidNumberingSystem);
mustHaveProperty(actual, "style", ["decimal"]);
mustNotHaveProperty(actual, "currency");
mustNotHaveProperty(actual, "currencyDisplay");
mustHaveProperty(actual, "minimumIntegerDigits", [1]);
mustHaveProperty(actual, "minimumFractionDigits", [0]);
mustHaveProperty(actual, "maximumFractionDigits", [3]);
mustNotHaveProperty(actual, "minimumSignificantDigits");
mustNotHaveProperty(actual, "maximumSignificantDigits");
mustHaveProperty(actual, "useGrouping", [true]);

